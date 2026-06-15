(function () {
  var questions = (window.OS_FINAL_EXAM_QUESTIONS || []).slice();
  var answerPattern56 = [2, 4, 1, 3, 1, 4, 2, 3];
  var categoryBlueprint = [
    ["파일시스템", 4],
    ["파일 및 디렉터리 명령어", 4],
    ["사용자 및 그룹", 4],
    ["권한·소유권·특수권한", 4],
    ["프로세스 및 작업 관리", 4],
    ["셸·환경변수·스크립트", 4],
    ["vi 편집기", 3],
    ["패키지 관리", 5],
    ["압축·아카이브·백업", 3],
    ["디스크·마운트", 4],
    ["네트워크 기초", 4],
    ["네트워크 서비스", 4],
    ["부팅 과정", 3],
    ["systemd/runlevel", 3],
    ["서비스 관리", 3]
  ];

  function byCategory(category) {
    return questions.filter(function (q) { return q.category === category; });
  }

  function cyclePick(list, start, count) {
    var picked = [];
    if (!list.length) return picked;
    for (var i = 0; i < count; i += 1) picked.push(list[(start + i) % list.length]);
    return picked;
  }

  function interleave(groups) {
    var ids = [];
    var max = groups.reduce(function (largest, group) { return Math.max(largest, group.length); }, 0);
    for (var i = 0; i < max; i += 1) {
      groups.forEach(function (group) {
        if (group[i]) ids.push(group[i].id);
      });
    }
    return ids;
  }

  function makeIds(setIndex) {
    var groups = categoryBlueprint.map(function (entry) {
      var category = entry[0];
      var count = entry[1];
      return cyclePick(byCategory(category), setIndex * count, count);
    });
    return interleave(groups);
  }

  window.OS_FINAL_EXAM_SETS = [
    {
      id: "final-1",
      title: "기말 모의고사 1회",
      shortTitle: "1회",
      description: "파일시스템부터 systemd까지 기말 전체 범위를 골고루 섞은 56문항 모의고사입니다.",
      questionIds: makeIds(0),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    },
    {
      id: "final-2",
      title: "기말 모의고사 2회",
      shortTitle: "2회",
      description: "1회와 같은 전체 범위 구성으로, 다른 문제 조합과 선지 배치를 사용한 56문항 모의고사입니다.",
      questionIds: makeIds(1),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    },
    {
      id: "final-3",
      title: "기말 모의고사 3회",
      shortTitle: "3회",
      description: "기말 전체 범위를 다시 한 번 동일 비율로 점검하는 56문항 실전형 모의고사입니다.",
      questionIds: makeIds(2),
      answerPattern: answerPattern56,
      timeGuide: "권장 60분"
    }
  ];
})();