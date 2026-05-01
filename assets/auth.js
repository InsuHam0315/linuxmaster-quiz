(function () {
  var SUPABASE_URL = "https://tkpzhbfbqhajephrnqdk.supabase.co";
  var SUPABASE_KEY = "sb_publishable_tGehFYz335niSRBBwNYqYg_scJndjfJ";
  var SESSION_KEY = "linuxmaster2SupabaseSession";

  function getLoginHref() {
    var path = window.location.pathname;
    if (path.indexOf("/cbt/") >= 0 || path.indexOf("/review/") >= 0 || path.indexOf("/stats/") >= 0 || path.indexOf("/notes/") >= 0) {
      return "../login.html";
    }
    return "./login.html";
  }

  function readSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeSession(session) {
    if (!session || !session.access_token) return null;
    var value = {
      access_token: session.access_token,
      refresh_token: session.refresh_token || "",
      token_type: session.token_type || "bearer",
      expires_at: session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600),
      user: session.user || null
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("linuxmaster:auth-change", { detail: value }));
    return value;
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new CustomEvent("linuxmaster:auth-change"));
  }

  function authFetch(path, options, accessToken) {
    var headers = Object.assign({
      apikey: SUPABASE_KEY,
      Authorization: "Bearer " + (accessToken || SUPABASE_KEY),
      "Content-Type": "application/json"
    }, options && options.headers ? options.headers : {});

    return fetch(SUPABASE_URL + path, Object.assign({}, options || {}, { headers: headers })).then(function (response) {
      return response.text().then(function (body) {
        var json = body ? JSON.parse(body) : null;
        if (!response.ok) {
          var message = json && (json.msg || json.message || json.error_description || json.error);
          throw new Error(message || "Supabase 요청에 실패했습니다.");
        }
        return json;
      });
    });
  }

  function signUp(email, password) {
    return authFetch("/auth/v1/signup", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password })
    }).then(function (result) {
      if (result && result.access_token) writeSession(result);
      return result;
    });
  }

  function signIn(email, password) {
    return authFetch("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password })
    }).then(function (result) {
      writeSession(result);
      return result;
    });
  }

  function refreshSession(session) {
    if (!session || !session.refresh_token) return Promise.resolve(null);
    return authFetch("/auth/v1/token?grant_type=refresh_token", {
      method: "POST",
      body: JSON.stringify({ refresh_token: session.refresh_token })
    }).then(writeSession).catch(function () {
      clearSession();
      return null;
    });
  }

  function getSession() {
    var session = readSession();
    if (!session) return Promise.resolve(null);
    var expiresSoon = Number(session.expires_at || 0) - 60 < Math.floor(Date.now() / 1000);
    if (expiresSoon) return refreshSession(session);
    return Promise.resolve(session);
  }

  function getUser() {
    return getSession().then(function (session) {
      if (!session) return null;
      return authFetch("/auth/v1/user", { method: "GET" }, session.access_token).then(function (user) {
        session.user = user;
        writeSession(session);
        return user;
      }).catch(function () {
        return session.user || null;
      });
    });
  }

  function signOut() {
    return getSession().then(function (session) {
      if (!session) {
        clearSession();
        return;
      }
      return authFetch("/auth/v1/logout", { method: "POST" }, session.access_token).catch(function () {}).then(clearSession);
    });
  }

  function getStudyRow() {
    return getSession().then(function (session) {
      if (!session || !session.user) return null;
      var userId = encodeURIComponent(session.user.id);
      return authFetch("/rest/v1/study_data?select=data,updated_at&user_id=eq." + userId, {
        method: "GET",
        headers: { Accept: "application/json" }
      }, session.access_token).then(function (rows) {
        return rows && rows[0] ? rows[0] : null;
      });
    });
  }

  function saveStudyRow(data) {
    return getSession().then(function (session) {
      if (!session || !session.user) return null;
      return authFetch("/rest/v1/study_data?on_conflict=user_id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=representation" },
        body: JSON.stringify({
          user_id: session.user.id,
          data: data,
          updated_at: new Date().toISOString()
        })
      }, session.access_token);
    });
  }

  function renderAuthStatus() {
    var header = document.querySelector(".site-header .wrap") || document.querySelector("header .wrap");
    if (!header) return;
    var box = document.getElementById("authStatus");
    if (!box) {
      box = document.createElement("div");
      box.id = "authStatus";
      box.className = "auth-status";
      header.appendChild(box);
    }

    getUser().then(function (user) {
      if (!user) {
        box.innerHTML = '<a class="button secondary" href="' + getLoginHref() + '">로그인/회원가입</a><span>로그인하면 학습 기록이 계정에 저장됩니다.</span>';
        return;
      }
      box.innerHTML = '<span><strong>' + escapeHtml(user.email || "로그인됨") + '</strong> 계정으로 공부 중</span><button class="button secondary" type="button" id="logoutBtn">로그아웃</button>';
      document.getElementById("logoutBtn").addEventListener("click", function () {
        signOut().then(function () { window.location.reload(); });
      });
    });
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  window.LinuxMasterAuth = {
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
    getSession: getSession,
    getUser: getUser,
    getStudyRow: getStudyRow,
    saveStudyRow: saveStudyRow,
    renderAuthStatus: renderAuthStatus,
    SESSION_KEY: SESSION_KEY
  };

  document.addEventListener("DOMContentLoaded", renderAuthStatus);
})();
