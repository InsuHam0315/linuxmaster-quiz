(function () {
  var questions = (window.OS_FINAL_EXAM_QUESTIONS || []).slice();
  var answerPattern56 = [2, 4, 1, 3, 1, 4, 2, 3];

  function isUniqueLongestCorrect(q) {
    var lengths = q.choices.map(function (choice) { return Array.from(String(choice)).length; });
    var max = Math.max.apply(null, lengths);
    return lengths[q.answer - 1] === max && lengths.filter(function (length) { return length === max; }).length === 1;
  }

  function cyclePick(list, start, count) {
    var picked = [];
    if (!list.length) return picked;
    for (var i = 0; i < count; i += 1) picked.push(list[(start + i) % list.length]);
    return picked;
  }

  function makeIds(safeStart, longStart) {
    var safeQuestions = questions.filter(function (q) { return !isUniqueLongestCorrect(q); });
    var longBiasQuestions = questions.filter(isUniqueLongestCorrect);
    return cyclePick(safeQuestions, safeStart, 50)
      .concat(cyclePick(longBiasQuestions, longStart, 6))
      .map(function (q) { return q.id; });
  }

  window.OS_FINAL_EXAM_SETS = [
    {
      id: "final-1",
      title: "1회: 기출 연계 기본",
      shortTitle: "1회",
      description: "파일·권한·프로세스·패키지처럼 리눅스마스터 2급 2차와 기말 범위가 많이 겹치는 기본 유형 56문항입니다.",
      questionIds: makeIds(0, 0),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    },
    {
      id: "final-2",
      title: "2회: 명령어·시스템 혼합",
      shortTitle: "2회",
      description: "패키지, 디스크, 네트워크, 부팅/systemd까지 섞어 시험장에서 헷갈리는 명령어를 훈련하는 56문항입니다.",
      questionIds: makeIds(25, 6),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    },
    {
      id: "final-3",
      title: "3회: 수업자료·실습 심화",
      shortTitle: "3회",
      description: "노션 정리와 교수님 PDF에서 강조된 디스크, 계정, 네트워크 서비스, systemd 실습을 보강한 56문항입니다.",
      questionIds: makeIds(50, 12),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    }
  ];
})();