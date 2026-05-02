# 리눅스마스터 2급 개인 학습 사이트

GitHub Pages에서 별도 빌드 없이 바로 배포되는 정적 HTML/CSS/JavaScript 기반 CBT 학습 사이트입니다. React, Vite, Node 빌드 도구를 사용하지 않습니다.

## GitHub Pages 배포

저장소를 GitHub에 올린 뒤 Pages 설정에서 배포 브랜치와 루트 폴더를 선택하면 됩니다. 모든 내부 링크는 GitHub Pages와 커스텀 도메인에서 모두 동작하도록 상대경로를 사용합니다.

## 파일 구조

```text
linuxmaster-quiz/
├─ index.html
├─ cbt/
│  ├─ linuxmaster2_first_exam.html
│  ├─ linuxmaster2_cbt_01.html
│  └─ linuxmaster2_20231209.html
├─ data/
│  ├─ linuxmaster2_first_exam.js
│  └─ linuxmaster2_20231209.js
├─ review/
│  └─ wrong-notes.html
├─ stats/
│  └─ study-record.html
├─ notes/
│  ├─ index.html
│  └─ first-exam/
├─ assets/
│  ├─ style.css
│  └─ storage.js
└─ README.md
```

## 리눅스마스터 2급 1차 필기 CBT

- 추가 파일: `cbt/linuxmaster2_first_exam.html`
- 데이터 파일: `data/linuxmaster2_first_exam.js`
- 원본: `source/붙여넣은 텍스트 (1).txt`
- 문제 수: 60문항
- 분류:
  - 제1과목 리눅스 일반
  - 제2과목 리눅스 운영 및 관리
- 주의: 사용자 제공 기출/복원 텍스트를 기반으로 정리한 학습용 문제집입니다. 원본에서 문제, 보기, 정답이 명확한 항목만 우선 반영했습니다.

## 주요 기능

- 전체 문제 풀기
- 한 문제씩 보기
- 과목 필터
- 카테고리 필터
- 문제 번호 이동
- 정답 확인 및 해설 보기
- 점수 계산
- 오답 저장
- 오답노트와 학습기록 연동

## localStorage 기록 저장

학습 기록은 `linuxmaster2StudyData` 키로 브라우저 localStorage에 저장됩니다. CBT 페이지는 `assets/storage.js`의 `window.LinuxMasterStudy.recordAnswer(...)`를 사용하며, 사용할 수 없는 경우에만 페이지 내부에서 최소 세션 정보를 저장합니다.
