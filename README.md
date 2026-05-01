# 리눅스마스터 2급 개인 학습 포털

GitHub Pages에서 빌드 없이 바로 열 수 있는 정적 CBT 학습 사이트입니다. 루트 `index.html`은 학습 포털 홈이고, 기존 CBT 문제풀이는 `cbt/` 아래에 보존했습니다.

## GitHub Pages 배포

이 저장소를 GitHub에 올린 뒤 Pages 설정에서 배포 브랜치와 루트 폴더를 선택하면 됩니다. React, Vite, Node, 외부 CDN 없이 순수 HTML/CSS/JavaScript로 동작합니다.

## 파일 구조

```text
linuxmaster-quiz/
├─ index.html
├─ cbt/
│  └─ linuxmaster2_cbt_01.html
├─ review/
│  └─ wrong-notes.html
├─ stats/
│  └─ study-record.html
├─ notes/
│  └─ index.html
├─ assets/
│  ├─ style.css
│  └─ storage.js
└─ README.md
```

## 새 CBT HTML 추가 방법

1. 새 CBT 파일을 `cbt/` 폴더에 추가합니다.
2. 파일 안의 링크는 상대경로를 사용합니다.
3. 공통 기록 저장을 쓰려면 `../assets/storage.js`를 로드하고, 답안 처리 지점에서 `window.LinuxMasterStudy.recordAnswer(...)`를 호출합니다.
4. 루트 `index.html`의 CBT 카드 영역에 새 문제집 링크를 추가합니다.

## localStorage 기록 저장의 한계

학습 기록은 `linuxmaster2StudyData` 키로 브라우저 localStorage에 저장됩니다.

- 같은 브라우저에서만 유지됩니다.
- 브라우저 데이터 삭제, 시크릿 모드 종료, 저장공간 정리 시 사라질 수 있습니다.
- 기기 간 자동 동기화는 지원하지 않습니다.
