(function () {
  var STORAGE_KEY = "linuxmaster2StudyData";
  var MAX_SESSIONS = 100;

  function defaultData() {
    return {
      version: 1,
      totalAnswered: 0,
      correctCount: 0,
      wrongCount: 0,
      lastStudiedAt: null,
      byCategory: {},
      wrongQuestions: {},
      sessions: []
    };
  }

  function normalizeData(data) {
    var base = defaultData();
    if (!data || typeof data !== "object") return base;
    data.version = data.version || base.version;
    data.totalAnswered = Number(data.totalAnswered) || 0;
    data.correctCount = Number(data.correctCount) || 0;
    data.wrongCount = Number(data.wrongCount) || 0;
    data.lastStudiedAt = data.lastStudiedAt || null;
    data.byCategory = data.byCategory && typeof data.byCategory === "object" ? data.byCategory : {};
    data.wrongQuestions = data.wrongQuestions && typeof data.wrongQuestions === "object" ? data.wrongQuestions : {};
    data.sessions = Array.isArray(data.sessions) ? data.sessions.slice(0, MAX_SESSIONS) : [];
    return data;
  }

  function getStudyData() {
    try {
      return normalizeData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (error) {
      return defaultData();
    }
  }

  function saveStudyData(data) {
    var normalized = normalizeData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    queueCloudSave(normalized);
    return normalized;
  }

  function resetStudyData() {
    var data = defaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    queueCloudSave(data);
    return data;
  }

  function mergeStudyData(localData, remoteData) {
    var local = normalizeData(localData);
    var remote = normalizeData(remoteData);
    var merged = defaultData();
    var sessionMap = {};
    var wrongMap = {};

    merged.totalAnswered = Math.max(local.totalAnswered, remote.totalAnswered);
    merged.correctCount = Math.max(local.correctCount, remote.correctCount);
    merged.wrongCount = Math.max(local.wrongCount, remote.wrongCount);
    merged.lastStudiedAt = [local.lastStudiedAt, remote.lastStudiedAt].filter(Boolean).sort().pop() || null;

    [local.byCategory, remote.byCategory].forEach(function (categories) {
      Object.keys(categories || {}).forEach(function (category) {
        if (!merged.byCategory[category]) merged.byCategory[category] = { answered: 0, correct: 0, wrong: 0 };
        merged.byCategory[category].answered = Math.max(merged.byCategory[category].answered, Number(categories[category].answered) || 0);
        merged.byCategory[category].correct = Math.max(merged.byCategory[category].correct, Number(categories[category].correct) || 0);
        merged.byCategory[category].wrong = Math.max(merged.byCategory[category].wrong, Number(categories[category].wrong) || 0);
      });
    });

    [local.wrongQuestions, remote.wrongQuestions].forEach(function (questions) {
      Object.keys(questions || {}).forEach(function (key) {
        var row = questions[key];
        if (!row || !row.questionId) return;
        if (!wrongMap[row.questionId] || String(row.answeredAt || "") > String(wrongMap[row.questionId].answeredAt || "")) {
          wrongMap[row.questionId] = row;
        }
      });
    });
    merged.wrongQuestions = wrongMap;

    [local.sessions, remote.sessions].forEach(function (sessions) {
      (sessions || []).forEach(function (row) {
        if (!row) return;
        var key = [row.questionId, row.answeredAt, row.selectedAnswer].join("|");
        sessionMap[key] = row;
      });
    });
    merged.sessions = Object.keys(sessionMap).map(function (key) {
      return sessionMap[key];
    }).sort(function (a, b) {
      return String(b.answeredAt || "").localeCompare(String(a.answeredAt || ""));
    }).slice(0, MAX_SESSIONS);

    return normalizeData(merged);
  }

  var saveTimer = null;
  function queueCloudSave(data) {
    if (!window.LinuxMasterAuth || typeof window.LinuxMasterAuth.saveStudyRow !== "function") return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      window.LinuxMasterAuth.saveStudyRow(data).catch(function (error) {
        console.warn("cloud study save failed", error);
      });
    }, 300);
  }

  function syncFromCloud() {
    if (!window.LinuxMasterAuth || typeof window.LinuxMasterAuth.getStudyRow !== "function") return Promise.resolve(getStudyData());
    return window.LinuxMasterAuth.getStudyRow().then(function (row) {
      if (!row || !row.data) {
        queueCloudSave(getStudyData());
        return getStudyData();
      }
      var merged = mergeStudyData(getStudyData(), row.data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      queueCloudSave(merged);
      window.dispatchEvent(new CustomEvent("linuxmaster:study-sync", { detail: merged }));
      return merged;
    }).catch(function (error) {
      console.warn("cloud study sync failed", error);
      return getStudyData();
    });
  }

  function recordAnswer(questionInfo) {
    var info = questionInfo || {};
    var data = getStudyData();
    var now = info.answeredAt || new Date().toISOString();
    var category = info.category || "미분류";
    var questionId = info.questionId || "LM2-" + now.replace(/[^0-9]/g, "");
    var isCorrect = Boolean(info.isCorrect);

    if (!data.byCategory[category]) {
      data.byCategory[category] = { answered: 0, correct: 0, wrong: 0 };
    }

    data.totalAnswered += 1;
    data.lastStudiedAt = now;
    data.byCategory[category].answered += 1;

    if (isCorrect) {
      data.correctCount += 1;
      data.byCategory[category].correct += 1;
      if (data.wrongQuestions[questionId]) {
        data.wrongQuestions[questionId].mastered = true;
        data.wrongQuestions[questionId].masteredAt = now;
        delete data.wrongQuestions[questionId];
      }
    } else {
      data.wrongCount += 1;
      data.byCategory[category].wrong += 1;
      data.wrongQuestions[questionId] = {
        questionId: questionId,
        questionText: info.questionText || "",
        category: category,
        selectedAnswer: info.selectedAnswer || "",
        correctAnswer: info.correctAnswer || "",
        explanation: info.explanation || "",
        source: info.source || "",
        answeredAt: now
      };
    }

    data.sessions.unshift({
      questionId: questionId,
      questionText: info.questionText || "",
      category: category,
      selectedAnswer: info.selectedAnswer || "",
      correctAnswer: info.correctAnswer || "",
      isCorrect: isCorrect,
      source: info.source || "",
      answeredAt: now
    });
    data.sessions = data.sessions.slice(0, MAX_SESSIONS);

    return saveStudyData(data);
  }

  window.LinuxMasterStudy = {
    STORAGE_KEY: STORAGE_KEY,
    getStudyData: getStudyData,
    saveStudyData: saveStudyData,
    resetStudyData: resetStudyData,
    recordAnswer: recordAnswer,
    syncFromCloud: syncFromCloud
  };
  window.getStudyData = getStudyData;
  window.saveStudyData = saveStudyData;
  window.resetStudyData = resetStudyData;
  window.recordAnswer = recordAnswer;
  window.syncStudyDataFromCloud = syncFromCloud;

  if (window.LinuxMasterAuth) {
    window.LinuxMasterAuth.getSession().then(function (session) {
      if (session) syncFromCloud();
    });
    window.addEventListener("linuxmaster:auth-change", function (event) {
      if (event.detail) syncFromCloud();
    });
  }
})();
