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
    return normalized;
  }

  function resetStudyData() {
    var data = defaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
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
    recordAnswer: recordAnswer
  };
  window.getStudyData = getStudyData;
  window.saveStudyData = saveStudyData;
  window.resetStudyData = resetStudyData;
  window.recordAnswer = recordAnswer;
})();
