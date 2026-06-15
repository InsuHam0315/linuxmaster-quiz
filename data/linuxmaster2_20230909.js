window.LM2_20230909_QUESTIONS = [
  {
    "id": "LM2-20230909-001",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "project 그룹에 속한 사용자들이 /project 디렉터리에서 파일 생성은 자유로우나 삭제는 본인이 생성한 파일만 가능하도록 설정하려고 한다. /project 디렉터리의 정보가 다음과 같을 때 관련 명령으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m1.gif?1694553791",
    "choices": [
      "chmod g+s /project",
      "chmod g+t /project",
      "chmod o+s /project",
      "chmod o+t /project"
    ],
    "answer": 4,
    "explanation": "set-uid(4)\n- 설정: u+s\n- 제거: u-s\n- 실행 순간에만 소유자 권한을 빌려옴\n- 사용자 실행권한 있으면 s 없으면 S ( drwsr-x--- 또는 drwSr-x--- )\n\n set-gid(2)\n- 설정: g+s\n- 제거: g-s\n- 실행 순간에만 소유 그룹 권한을 빌려옴\n- 그룹 사용자 실행 권한 있으면 s, 없으면 S ( drwxr-s--- 또는 drwxr-S---）\n\n sticky-bit(1)\n- 설정: o+t\n- 제거: o-t\n- 디렉터리에서 파일 생성은 자유로우나 삭제는 본인이 생성한 파일만 가능\n- 다른 사용자 실행 권한 있으면 t, 없으면 T ( drwxr-x--t 또는 drwxr-x--T )",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-002",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 특수 권한을 부여해서 사용하는 경우의 예로 가장 거리가 먼 것은?",
    "passage": "",
    "choices": [
      "Sticky-Bit를 파일에 부여한다.",
      "Set-UID를 실행 파일에 부여한다.",
      "Set-GID를 실행 파일에 부여한다.",
      "Set-GID를 디렉터리에 부여한다."
    ],
    "answer": 1,
    "explanation": "Sticky-Bit는 디렉토리에 부여합니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-003",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 파일이나 디렉터리의 소유자를 확인하는 명령어로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ls",
      "chmod",
      "chown",
      "umask"
    ],
    "answer": 1,
    "explanation": "ls : 파일이나 디렉터리 소유자를 확인\nchmod : 파일이나 디렉터리 권한을 부여\nchown : 파일이나 디렉터리 소유자 변경\numask : 새로 생성되는 파일이나 디렉터리 권한 제한",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-004",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 생성된 a.txt의 허가권 값으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m4.gif?1694553791",
    "choices": [
      "-rw-rw-r--",
      "-rwxrwxr-x",
      "drw-rw-r--",
      "drwxrwxr-x"
    ],
    "answer": 1,
    "explanation": "txt기본권한 666이고 Unmask해서 권한이 664 -rw-rw-r--로 바뀜",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-005",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m5.gif?1694553791",
    "choices": [
      "quota",
      "edquota",
      "setquota",
      "xfs_quota"
    ],
    "answer": 2,
    "explanation": "quota : 사용자의 디스크 사용량 및 할당량을 보고하는 명령어\nedquota : 사용자 또는 그룹의 디스크 쿼터를 편집하는 명령어\nsetquota : 쿼터 설정을 관리하는 명령어\nxfs_quota : XFS 파일 시스템에서 사용되는 명령어",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-006",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 현재 마운트된 디스크의 남아있는 용량을 확인할 때 사용하는 명령어로 알맞은 것은?",
    "passage": "",
    "choices": [
      "df",
      "du",
      "fdisk",
      "mount"
    ],
    "answer": 1,
    "explanation": "df 명령어는 파일 시스템의 디스크 여유 공간 및 사용 현황을 보여주는 명령어\ndu 명령어는 디렉터리 및 파일의 디스크 사용량을 보여주는 명령어\nfdisk 명령어는 디스크 파티션을 생성, 수정 및 삭제하는 데 사용\nmount 명령어는 파일 시스템을 마운트하는 데 사용\n특정 디렉터리에 다른 디스크 또는 파일 시스템을 연결하여 사용 가능하게 만듬",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-007",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 결과에 대항하는 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m7.gif?1694553792",
    "choices": [
      "lsblk",
      "blkid",
      "fdisk",
      "df"
    ],
    "answer": 1,
    "explanation": "lsblk : 리눅스 스토리지 디바이스 정보를 출력하는 명령어\nblkid : 리눅스 블록 디바이스의 UUID를 출력하는 명령어\nfdisk : 디스크 파티션을 생성, 삭제, 수정할 때 사용하는 명령어\ndf : 파일 시스템의 마운트 된 디스크 사용량과 여유공간을 보여주는 명령어",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-008",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 파일명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m8.gif?1694553792",
    "choices": [
      "/etc/fstab",
      "/etc/mtab",
      "/etc/mounts",
      "/etc/partitions"
    ],
    "answer": 1,
    "explanation": "/etc/fstab -> 파일 시스템 테이블파일, 부팅 시 시스템이 어떤 파일 시스템들을 어떤 디렉터리에 마운트 해야하는지 정의\n/etc/mtab -> 시스템에 마운트 된 파일 시스템이나 디바이스의 정보를 알 수 있도록 한 파일\n/etc/mounts -> 존재하지 않는 디렉터리\n/proc/mounts -> 시스템 커널 기준의 실시간 마운트 정보\n/etc/partitions -> 잘못된 디렉터리\n/proc/partitions -> 커널이 인식한 파티션의 정보를 표시",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-009",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m9.gif?1694553792",
    "choices": [
      "quota",
      "mount",
      "umount",
      "fdisk"
    ],
    "answer": 2,
    "explanation": "quota : 사용자 또는 그룹의 디스크 사용량 및 할당량 정보를 표시하는 명령어\nmount : 파일 시스템 및 USB 플래시 드라이브와 같은 이동식 장치를 디렉터리의 특정 마운트 지점에 연결하는 명령어\numount : 마운트 연결을 해제하는 명령어\nfdisk : 디스크 파티션을 생성, 삭제, 수정할 때 사용하는 명령어",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-010",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "파일/권한/디스크",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 /dev/sdb1을 XFS 파일 시스템으로 포맷하는 과정이다. (괄호)안에 들어갈 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m10.gif?1694553791",
    "choices": [
      "xfs.mkfs",
      "mkfs.xfs",
      "mke2fs -j xfs",
      "mke2fs -t xfs"
    ],
    "answer": 2,
    "explanation": "* 정답 : 2번 mkfs.xfs\n- 리눅스에서 xfs 파일시스템을 생성(포맷)할 때 사용하는 명령어임\n- mkfs = \"Make File System\"의 약자\n- 사용법 : mkfs.xfs",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-011",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 셸로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m11.gif?1694553791",
    "choices": [
      "bourne shell",
      "csh",
      "dash",
      "bash"
    ],
    "answer": 4,
    "explanation": "개발 순서가 bourne shell - csh - bash 순서인데\nGNU 프로젝트까지 왔으면 bash라고 외우시면 됩니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-012",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 파일명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m12.gif?1694553791",
    "choices": [
      "/etc/passwd",
      "/etc/shells",
      "/etc/bashrc",
      "/etc/profile"
    ],
    "answer": 2,
    "explanation": "/etc/passwd 파일은 사용자 계정 정보를 포함\n/etc/shells 파일은 시스템에서 사용 가능한 셸의 목록을 제공하는 파일\n/etc/bashrc 파일은 Bash 셸의 전역 설정 파일로, 시스템 전체의 Bash 셸 설정을 구성\n/etc/profile 파일은 사용자가 로그인할 때 실행되는 전역 프로파일 스크립트",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-013",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 명령의 결과에 대한 설명으로 가장 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m13.gif?1694553791",
    "choices": [
      "사용자가 로그인 시에 부여받은 셸 정보가 출력된다.",
      "사용자가 현재 사용하고 있는 셸 정보가 출력된다.",
      "사용자가 변경할 수 있는 셸 정보가 출력된다.",
      "화면에 어떠한 결과도 출력되지 않는다."
    ],
    "answer": 1,
    "explanation": "아래와 같은 오류 신고가 있었습니다.\n여러분들의 많은 의견 부탁 드립니다.\n추후 여러분들의 의견을 반영하여 정답을 수정하도록 하겠습니다.\n참고로 정답 변경은 오류 신고 5회 이상일 경우 수정합니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-014",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 ihd 사용자가 다른 셸로 변경하는 과정이다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m14.gif?1694553791",
    "choices": [
      "-l",
      "-u",
      "-s",
      "-c"
    ],
    "answer": 3,
    "explanation": "-s: 이 옵션은 'shell'의 약자로, 사용자의 로그인 셸을 변경하는 데 사용됩니다.\n-c: 이 옵션은 chsh 명령어에서 사용되지 않습니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-015",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 최근에 실행한 명령 중에 'al'이라는 문자열을 포함한 명령을 찾아서 실행하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "!?al",
      "!!al",
      "!*al",
      "!-al"
    ],
    "answer": 1,
    "explanation": "!?al은 최근에 실행된 명령 중에 'al'이라는 문자열을 포함하는 명령을 실행\n!!al은 직전에 실행한 명령을 다시 실행합니다. 여기에서 'al'은 직전 명령의 일부\n!*al은 현재 명령 라인의 모든 단어를 포함하는 명령을 실행합니다. 여기에서 'al'은 단어 중 하나\n!-al은 현재 명령보다 n번째 전에 실행한 명령을 실행합니다. 여기에서 'al'은 명령 중의 일부로 간주",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-016",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 파일명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m16.gif?1694553791",
    "choices": [
      "bash_profile",
      "bash_history",
      ".bash_profile",
      ".bash_history"
    ],
    "answer": 4,
    "explanation": "일반적으로 홈 디렉토리에 있는 쉘 히스토리 파일은 숨겨진 파일이므로 파일 이름 앞에 .(점)이 붙어 있습니다. 따라서 홈 디렉토리 안에 있는 쉘 히스토리 파일의 이름은 .bash_history, .zsh_history, .fish_history 등과 같이 숨겨진 파일 이름을 가집니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-017",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "ls 명령으로 에일리어스(alias)가 설정된 상태에서 원래의 ls 명령어를 실행하려고 한다. 다음 중 관련 설명으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ls 명령어 앞에 ! 기호를 덧붙여서 실행한다.",
      "ls 명령어 앞에 $ 기호를 덧붙여서 실행한다.",
      "ls 명령어 앞에 \\ 기호를 덧붙여서 실행한다.",
      "ls 명령어 앞에 / 기호를 덧붙여서 실행한다."
    ],
    "answer": 3,
    "explanation": "ls 명령어에 설정된 alias를 우회하고 원래의 ls 명령어를 실행하려면 명령어 앞에 백슬래시(\\)를 사용하면 됩니다.\n예를 들어, ls 명령어에 ls -l이라는 alias가 설정되어 있다고 가정해 봅시다. 이때 원래 ls 명령어를 실행하려면 다음과 같이 입력할 수 있습니다.\n백슬래시(\\)를 사용하여 ls 명령어에 설정된 alias를 무시하고, 시스템에서 기본으로 제공하는 ls 명령어를 실행할 수 있습니다.\n따라서 정답은 3번 입니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-018",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "셸/환경변수",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m18.gif?1694553791",
    "choices": [
      "$LANG",
      "$TERM",
      "$PS1",
      "$TMOUT"
    ],
    "answer": 1,
    "explanation": "사용자의 현재 환경에서 설정된 언어 변수인 \"LANG\"을 출력하는 명령어로 시스템에서 설정된 언어 환경에 따라 해당 언어 코드가 출력\n예를 들어, 영어(미국) 환경에서 실행하면 \"en_US.UTF-8\"과 같은 출력이 나올 수 있음\n각 언어 설정에 따라 다른 출력이 표시 됨",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-019",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m19.gif?1695071370",
    "choices": [
      "exec",
      "fork",
      "init",
      "systemd"
    ],
    "answer": 2,
    "explanation": "exec : 원래의 프로세스를 멈추고 새로운 프로세스를 대체하는 명령어\nfork : 현재 프로세스에 대해 자식 프로세스를 생성하는 명령어\ninit : 초기화 프로세스를 제어하는 명령어",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-020",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 명령어를 백그라운드 프로세스로 실행하기 위한 방법으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "실행 명령어 앞부분에 bg를 덧붙여서 실행한다.",
      "실행 명령어 앞부분에 jobs를 덧붙여서 실행한다.",
      "실행 명령어 뒷부분에 & 기호를 덧붙여서 실행한다.",
      "실행 명령어 뒷부분에 bg를 덧붙여서 실행한다."
    ],
    "answer": 3,
    "explanation": "명령어를 실행할 때\n백그라운드 작업으로 실행하고자 할 때는\n명령어 뒤에 &를 붙여주면 된다.\n명령어bg는 현재 실행 중인 프로세스를 백그라운드 작업으로 전환하는 명령어다.\n형식 : bg %작업번호 또는 bg 작업번호\n따라서 명령어를 백 그라운드 작업으로 실행하고자 할 때는 명령어 뒤에 &를 붙이는게 맞다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-021",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m21.gif?1694553791",
    "choices": [
      "init",
      "inetd",
      "xinetd",
      "standalone"
    ],
    "answer": 4,
    "explanation": "데몬은 inetd와 standalone. 그중 standalone이 메모리에 상주.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-022",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 kill 명령어를 실행할 때 전달되는 기본 시그널 명칭과 번호의 조합으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "SIGKILL, 9",
      "SIGKILL, 15",
      "SIGTERM, 9",
      "SIGTERM, 15"
    ],
    "answer": 4,
    "explanation": "1. SIGKILL의 번호 9\n- 발생조건 : 프로세스 강제 종료 시 발생\n- 기본동작 : 종료\n2. SIGTERM의 번호 15\n- 발생조건 : kill시스템 호출 시 발생\n- 기본동작 : 종료\n=> 따라서 KILL명령어를 실행할 때 전달되는 시그널은 SIGTERM 이며, 번호는 15이므로 답은 4번",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-023",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 포어그라운드 프로세스를 백그라운드 프로세스로 전환하기 위해 사용하는 키 조합으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "[Ctrl] + [c]",
      "[Ctrl] + [a]",
      "[Ctrl] + [z]",
      "[Ctrl] + [d]"
    ],
    "answer": 3,
    "explanation": "1. Ctrl + z\n포어그라운드 -> 백그라운드로 전환 시 먼저 실행 중인 작업을 일시중지 시켜야한다.\n따라서 Ctrl + z(SIGTSTP,20 : ctrl + z 입력 시 발생하는 시그널로 프로세스 대기로 전환시킨다.)를 사용하여\n중지시킨 후 bg 명령을 수행한다.\n2. Ctrl + c\n명령어 fg는 현재 백그라운드에서 실행 중인 명령어를 포그라운드로 전환한다.\n포어 그라운드 작업을 종료하려면 Ctrl + c(SIGINT, 2: Ctrl + c 입력시 발생하는 시그널로, 종료시킨다.)를 입력",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-024",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 명령의 결과에 대한 설명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m24.gif?1694553791",
    "choices": [
      "bash 프로세스의 우선순위를 높인다.",
      "bash 프로세스의 우선순위를 낮춘다.",
      "bash 프로세스의 PRI 값을 -10으로 변경한다.",
      "사용법 오류로 인해 실행되지 않는다."
    ],
    "answer": 4,
    "explanation": "renice",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-025",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "cron을 이용해서 해당 스크립트를 매월 1일 오전 4시 2분에 주기적으로 실행하려고 한다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m25.gif?1694553791",
    "choices": [
      "4 2 * * 1",
      "2 4 * * 1",
      "4 2 1 * *",
      "2 4 1 * *"
    ],
    "answer": 4,
    "explanation": "정답은 4번 보기입니다. ComCBT 공개 해설과 정답을 기준으로 학습용으로 정리했습니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-026",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 프로세스 아이디가 513, 514, 515번인 프로세스를 종료시키는 과정이다. (괄호) 안에 들어갈 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m26.gif?1694553791",
    "choices": [
      "kill",
      "pkill",
      "killall",
      "pgrep"
    ],
    "answer": 1,
    "explanation": "여러 프로세스를 종료시키는 경우\nkill",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-027",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 그림에 해당하는 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m27.gif?1694553791",
    "choices": [
      "ps",
      "top",
      "jobs",
      "pstree"
    ],
    "answer": 2,
    "explanation": "PS\n현재 실행 중인 프로세스의 상태를 보여주는 명령어\n(CPU 사용도가 낮은 순서로 출력함)\nTOP\n리눅스 시스템의 운영 상태를 실시간으로 모니터링하거나 프로세스 상태를 확인할 수 있음\n(%CPU : 해당 프로세스의 CPU사용률, %MEM:해당 프로세스의 메모리 사용률 => ps -l에는 표시되지 않음)\nJOBS\n작업이 중지된 상태, 백그라운드로 진행 중인 상태, 변경되었지만 보고되지 않은 상태 등을 표시\nPSTREE\n실행 중인 프로세스들을 트리구조로 나타냄",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-028",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "프로세스/작업 관리",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 명령어로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m28.gif?1694553791",
    "choices": [
      "bg",
      "jobs",
      "pgrep",
      "nohup"
    ],
    "answer": 4,
    "explanation": "nohup은 no hang up 의 약자. 백그라운드 동작과 달리 로그아웃으로 세션이 종료되더라도 프로그램이 종료되지 않음.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-029",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 vi 편집기를 개발한 인물로 알맞은 것은?",
    "passage": "",
    "choices": [
      "빌 조이",
      "리처드 스톨만",
      "브람 브레나르",
      "제임스 고슬링"
    ],
    "answer": 1,
    "explanation": "빌 조이 → vi\n리처드 스톨만 → emacs\n브람 브레나르 → vim",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-030",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 기본 사용법이 동일한 편집기의 조합으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "vi, emacs",
      "pico, emacs",
      "pico, nano",
      "vi, pico"
    ],
    "answer": 3,
    "explanation": "pico (10 e-12) → nano (10 e-9)\n피코 기반으로 나노가 나왔다. 숫자가 큰쪽이 나중. 이렇게 외우시면 편합니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-031",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 편집기로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m31.gif?1694553791",
    "choices": [
      "nano",
      "gedit",
      "vim",
      "emacs"
    ],
    "answer": 2,
    "explanation": "nano, emacs, vim : CUI (Command User Interface) 환경 텍스트 에디터 (편집기)\ngedit : GUI 기반 환경 텍스트 에디터, X 윈도에 맞춰서 개발, X 윈도 환경에서만 사용할 수 있는 편집기로 윈도우 운영체제의 메모장처럼 손쉽게 사용 가능\ngedit의 g가 그래픽이다 하고 외우면 편합니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-032",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 vi 편집기의 명령 모드에서 바로 직전에 삭제한 줄을 다시 복원하기 위해 실행하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "c",
      "r",
      "u",
      "dd"
    ],
    "answer": 3,
    "explanation": "u = undo",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-033",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 vi 편집기에서 한 줄이 linux인 경우에만 전부 Linux로 치환하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      ":% s/^linux$/Linux/g",
      ":% s/linux/^Linux$/g",
      ":% s/\\/Linux/g",
      ":% s/linux/\\/g"
    ],
    "answer": 1,
    "explanation": "/Linux/g 4. :% s/linux/\\/g\n정답 :",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-034",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "vi/편집기",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 vi 편집기에서 행 번호가 표시되도록 하는 ex 모드 환경설정으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "set no",
      "set ai",
      "set sm",
      "set number"
    ],
    "answer": 4,
    "explanation": "set nonu : set nu 기능 off\nset ai : 자동 들여쓰기\nset sm : 괄호 입력시 자동으로 대응되는 괄호 표시\nset number : 행 번호 표시",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-035",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 데비안 계열 리눅스에서 사용되는 패키지 관리 도구 모음으로 가장 알맞은 것은?",
    "passage": "",
    "choices": [
      "YaST, zypper",
      "YaST, dpkg",
      "dpkg, apt-get",
      "dnf, zypper"
    ],
    "answer": 3,
    "explanation": "배포판별 패키지 관리\t기본 패키지 관리\t온라인 패키지 관리\n래드햇 rpm yum\n데비안 dpkg apt-get\n수세 YaST Zypper\ndnf는 페도라 패키지 관리자",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-036",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 리눅스에서 사용되는 온라인 패키지 관리 도구로 거리가 먼 것은?",
    "passage": "",
    "choices": [
      "dnf",
      "dpkg",
      "zypper",
      "apt-get"
    ],
    "answer": 2,
    "explanation": "dpkg는 기본 패키지 관리 도구 입니다.\n1. dnf : 레드헷 계열인 yum 을 대체하는 온라인 패키지\n3. zypper ; 수세 계열 온라인 패키지\n4. apt-get : 데미안 계열 온라인 패키지",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-037",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 Makefile 파일이 생성되는 소스 설치 단계로 알맞은 것은?",
    "passage": "",
    "choices": [
      "configure",
      "make",
      "cmake",
      "make install"
    ],
    "answer": 1,
    "explanation": "소스 파일을 이용한 설치 단계: configure → make → make install\nconfigure : Makefile 생성을 위한 스크립트\nmake : 소스를 컴파일\nmake install : 설치를 하는 과정",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-038",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 소스 설치 방법으로 cmake를 선택한 프로젝트로 틀린 것은?",
    "passage": "",
    "choices": [
      "MySQL",
      "PHP",
      "KDE",
      "LMMS"
    ],
    "answer": 2,
    "explanation": "소스 설치 방법 cmake 선택 프로젝트 - MySQL, KDE, LMMS",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-039",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 현재 디렉터리에 있는 C 언어 파일만을 source.tar로 묶는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "tar rvf *.c source.tar",
      "tar rvf source.tar *.c",
      "tar cvf *.c source.tar",
      "tar cvf source.tar *.c"
    ],
    "answer": 4,
    "explanation": "옵션 c는 create의 약어. 압축파일을 새로 만들때 사용\nr은 기존 압축파일에 파일을 추가할때 사용\n압축파일 이름 먼저 그 후에 압축할 파일들 기재\n고로 정답은 tar cvf source.tar *.c",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-040",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 yum 명령을 이용해서 nmap 패키지를 설치하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "yum nmap install",
      "yum install nmap",
      "yum -y nmap",
      "yum -i nmap"
    ],
    "answer": 2,
    "explanation": "yum 패키지 관리자의 설치 명령어는 install\n-i 같은 약어 버전은 rpm입니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-041",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m41.gif?1694553791",
    "choices": [
      "-qi",
      "-ql",
      "-qa",
      "-qf"
    ],
    "answer": 4,
    "explanation": "-qi: information 패키지 정보 출력\n-ql: list 패키지 파일들 출력\n-qa: all 시스템의 모든 패키지 출력\n-qf: file 특정 파일을 설치한 패키지명 출력",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-042",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "패키지/압축",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 tar에서 xz 명령어와 관련 있는 압축 옵션으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "-x",
      "-z",
      "-Z",
      "-J"
    ],
    "answer": 4,
    "explanation": "-Z: compress 압축 적용 옵션\n-z: gzip 압축 적용 옵션.\n-j: bzip2 압축 적용 옵션.\n-J: xz 압축 적용 옵션.\n압축률: compress",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-043",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 BSD 계열 유닉스에서 사용하는 프린터 관련 명령으로 틀린 것은?",
    "passage": "",
    "choices": [
      "lp",
      "lpr",
      "lpq",
      "lprm"
    ],
    "answer": 1,
    "explanation": "lp는 System V 계열에서 사용하는 프린트 출력 명령",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-044",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 사운드카드 사용과 관련된 프로그램으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ALSA",
      "CUPS",
      "SANE",
      "LPRng"
    ],
    "answer": 1,
    "explanation": "ALSA : 사운드 카드용 장치 드라이버를 제공하기 위한 리눅스 커널 요소\nCUPS : 애플이 개발한 오픈소스 프린팅 시스템\nSANE : 평판 스캐너, 비디오 캠 등 이미지 관련 하드웨어를 사용할 수 있도록 해주는 API, GPL 라이선스\nLPRng : BSD 계열 유닉스에서 사용하는 프린팅 시스템",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-045",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 프린트 작업을 요청하는 명령어로 알맞은 것은?",
    "passage": "",
    "choices": [
      "cancel",
      "lpr",
      "lpq",
      "lpstat"
    ],
    "answer": 2,
    "explanation": "cancel : 프린터 작업을 취소하는 명령어\nlpr : 프린터 작업을 요청하는 명령어\nlpq : 프린터 큐에 있는 작업 목록을 출력하는 명령어\nlpsta : 프린터 큐의 상태를 출력하는 명령어",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-046",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 LVM 구성 순서로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m46.gif?1694553791",
    "choices": [
      "가 → 나 → 다",
      "다 → 나 → 가",
      "다 → 가 → 나",
      "가 → 다 → 나"
    ],
    "answer": 3,
    "explanation": "LVM의 구성 순서\nPV - VG - LV\nPVG는 이어지게 외우고 LVM이랑 가장 비슷한 LV는 마지막 순서.\n그냥 외우세요.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-047",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 LVM에 대한 설명으로 틀린 것은?",
    "passage": "",
    "choices": [
      "물리적 디스크 2개를 이용해서 하나의 파티션으로 구성할 수 있다.",
      "파티션의 크기를 확장해도 데이터의 손실이 발생하지 않는다.",
      "파티션의 크기를 축소해서 데이터의 손실이 발생하지 않는다.",
      "물리적 디스크 1개를 이용해서 두 개의 파티션을 구성할 수 있다."
    ],
    "answer": 3,
    "explanation": "LVM Logical Volume Management는 디스크나 대용량 스토리지 장치를 유연하고 확장이 가능하게 다룰 수 있는 기술이며 이를 커널에 구현한 기능입니다. 쉽게 파티션 관리하며 용량 확장한다 라고 생각하면 정확한 기술들을 모르시더라도 뭐가 답인지는 보일겁니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-048",
    "exam": "2023-09-09",
    "subject": "리눅스 운영 및 관리",
    "category": "장치/프린터/LVM/RAID",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 RAID로 구성된 하드 디스크 중에서 하나의 디스크에 오류가 발생해도 데이터의 손실이 없는 조합으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "RAID-0, RAID-1",
      "RAID-0, RAID-5",
      "RAID-1, RAID-5",
      "RAID-0, RAID-6"
    ],
    "answer": 3,
    "explanation": "RAID0 - 스트라이핑 방식. 디스크를 그대로 이어 붙여 큰 용량 하나로 씀. 백업용이 없으니 고장나면 그대로 날아감.\nRAID1 - 미러링 방식. 반반 나눠서 절반은 완전히 복제로 사용. 말 그대로 반은 백업\nRAID5 - 패리티 1개.\nRAID6 - 패리티 2개.\n패리티: 장애가 발생한 뒤에 데이터를 복원하기 위해서 사용되는 부호\n즉 RAID0가 없는 보기를 고르면 됩니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-049",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 부팅 모드를 확인하는 과정이다. X 윈도 모드로 부팅이 될 때 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m49.gif?1694553791",
    "choices": [
      "㉠ set-default ㉡ multi-user.target",
      "㉠ set-default ㉡ graphical.target",
      "㉠ get-default ㉡ multi-user.target",
      "㉠ get-default ㉡ graphical.target"
    ],
    "answer": 4,
    "explanation": "X 윈도 모드 = grapgical.target\n텍스트 모드 = multi-user.target",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-050",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 X Window 시스템에 할당된 TCP 포트 번호로 알맞은 것은?",
    "passage": "",
    "choices": [
      "6000",
      "8000",
      "8080",
      "8088"
    ],
    "answer": 1,
    "explanation": "X Window 시스템에 할당된 TCP 포트 번호는 6000+를 사용합니다.\n1번 보기 외에는 전부 8000번대니 답은 1번",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-051",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 라이브러리 명칭으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m51.gif?1694553791",
    "choices": [
      "XCB",
      "QT",
      "GTK+",
      "FLTK"
    ],
    "answer": 1,
    "explanation": "Xlib - XCB\nKDE - Qt\nGTK+ - GNOME\n세트라고 외우시면 최소 한 문제는 먹고 들어갑니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-052",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m52.gif?1694553791",
    "choices": [
      "QT",
      "KDE",
      "GNOME",
      "Xfce"
    ],
    "answer": 3,
    "explanation": "Xlib - XCB\nKDE - Qt\nGTK+ - GNOME\n세트라고 외우시면 최소 한 문제는 먹고 들어갑니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-053",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 상황과 관련된 설명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m53.gif?1694553791",
    "choices": [
      "A 시스템은 X 서버가 되고, 환경변수인 DISPLAY를 변경한다.",
      "A 시스템은 X 클라이언트가 되고, xhost 명령을 사용해서 제어한다.",
      "B 시스템은 X 클라이언트가 되고, 환경변수인 DISPLAY를 변경한다.",
      "B 시스템은 X 서버가 되고, xhost 명령을 사용해서 제어한다."
    ],
    "answer": 4,
    "explanation": "A 시스템은 클라이언트가 되고 DISPLAY 환경변수 사용\nB 시스템은 서버가 되고 xhost 명령 사용\n회차에 따라 정답이 A 시스템일수도 B 시스템일수도 있습니다. 무지성으로 외우기보다는 뭐가 클라이언트고 뭐가 서버인지, 환경변수를 쓰는 쪽은 어디인지 기억하도록 합시다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-054",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 결과에 해당하는 명령으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m54.gif?1694553791",
    "choices": [
      "echo $DISPLAY",
      "xhost list $DISPLAY",
      "xauth list $DISPLAY",
      "export DISPLAY"
    ],
    "answer": 3,
    "explanation": "xhost는 뒤에 ip주소가 와야합니다.\nDISPLAY 환경변수면 열에 아홉은 xauth라고 외우시면 됩니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-055",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 그림에 해당하는 프로그램으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m55.gif?1694553791",
    "choices": [
      "totem",
      "ImageMagicK",
      "Eog",
      "Gimp"
    ],
    "answer": 3,
    "explanation": "Eog는 이미지뷰어\nImageMagicK와 GIMP는 이미지 편집기.\n이미지 뷰어창이기 때문에 Eog임을 유추가능",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-056",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "X 윈도/GUI",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 그림에 해당하는 프로그램으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m56.gif?1694553791",
    "choices": [
      "LibreOffice Draw",
      "LibreOfiice Writer",
      "LibreOffice Calc",
      "LibreOffice Impress"
    ],
    "answer": 4,
    "explanation": "LibreOffice Draw - 그림판\nLibreOfiice Writer - 워\nLibreOffice Calc - 스프레드시트\nLibreOffice Impress - 파워포인트",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-057",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 LAN 구성 방식으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m57.gif?1694553791",
    "choices": [
      "망(Mesh)형",
      "링(Ring)형",
      "버스(Bus)형",
      "스타(Star)형"
    ],
    "answer": 3,
    "explanation": "마치 버스 노선도와 같이 한줄에 여러 PC들이 묶여있는 형상이여서 버스(Bus)형으로 지어졌으며, 이어지는 회선이 하나인 관계로 한번에 한 컴퓨터만 전송이 가능하고 PC댓수에 따라 네트워크 성능에 영향이 많이 감",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-058",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m58.gif?1694553791",
    "choices": [
      "32bit",
      "48bit",
      "64bit",
      "128bit"
    ],
    "answer": 2,
    "explanation": "IPv4 32bit\nIPv6 128bit\nMAC 48bit",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-059",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 패킷 교환 방식에 대한 설명으로 틀린 것은?",
    "passage": "",
    "choices": [
      "패킷별로 우선순위를 부여할 수 있다.",
      "회선 교환 방식과 비교해서 지연이 적게 발생한다.",
      "각각의 패킷마다 오버헤드 비트가 존재한다.",
      "고정 대역을 할당하지 않는 관계로 이론상으로는 무제한 수용이 가능하다."
    ],
    "answer": 2,
    "explanation": "패킷 교환 방식은 회선 교환 방식과 비교해서 지연이 더 발생합니다.\n가끔 오버헤드 비트가 없다 라는 보기로 출제되는 경우도 있으니 특징들을 어느정도 암기할 필요가 있습니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-060",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 기술로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m60.gif?1694553791",
    "choices": [
      "FDDI",
      "X.25",
      "Frame Relay",
      "Cell Relay"
    ],
    "answer": 1,
    "explanation": "광'섬유' 케이블을 이용 - FDDI(Fiber'섬유' Distributed Digital Interface)",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-061",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 프로토콜 제정기관과 관련 업무의 조합으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m61.gif?1694553791",
    "choices": [
      "㉠ - Ⓒ",
      "㉡ - Ⓐ",
      "㉠ - Ⓑ",
      "㉢ - Ⓑ"
    ],
    "answer": 4,
    "explanation": "ISO -> OSI\nEIA -> LAN 케이블 관련 표준\nIEEE -> LAN 관련 표준\n\nISO는 거꾸로 읽으면 OSI\nEIA는 거꾸로 읽으면 (C)AI(BL)E *I를 빼면 cable ^^;",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-062",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 OSI 계층으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m62.gif?1694553792",
    "choices": [
      "표현 계층",
      "세션 계층",
      "전송 계층",
      "네트워크 계층"
    ],
    "answer": 1,
    "explanation": "암호화, 번역 등 이런 문구 보이면 표현(presentation)계층.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-063",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 기초",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 IPv4의 B 클래스 네트워크 주소 대역으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "127.0.0.0 ~ 192.255.255.255",
      "127.0.0.0 ~ 191.255.255.255",
      "128.0.0.0 ~ 192.255.255.255",
      "128.0.0.0 ~ 191.255.255.255"
    ],
    "answer": 4,
    "explanation": "IPv4 주소 체계에서 B 클래스 주소 대역은 다음과 같습니다:\n\n첫 번째 옥텟: 128 ~ 191\n두 번째 옥텟: 0 ~ 255\n세 번째 옥텟: 0 ~ 255\n네 번째 옥텟: 0 ~ 255\n따라서 B 클래스 주소 대역은 다음과 같습니다: 128.0.0.0 ~ 191.255.255.255.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-064",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 X 윈도가 설치되지 않은 환경의 콘솔 창에서 이용할 수 있는 웹 브라우저로 알맞은 것은?",
    "passage": "",
    "choices": [
      "lynx",
      "chrome",
      "opera",
      "safari"
    ],
    "answer": 1,
    "explanation": "텍스트 기반인지 그래픽 기반인지 구분하는 문제.\n딱 봐도 나머지 3개는 너무 유명한 현대의 윈도우 맥 GUI포함 리눅스 등에서 사용하는 브라우저들이라 어렵지 않게 고르실 수 있습니다.\n23년 4회차 기출에서는 lynx가 아니라 links로 보기가 출제되었습니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-065",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 인터넷 서비스로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m65.gif?1694553792",
    "choices": [
      "SSH",
      "Telnet",
      "Gopher",
      "FTP"
    ],
    "answer": 2,
    "explanation": "평문사용으로 보안에 취약하지면 원격 접속이 된다 = Telnet\n보안강화가 되며 원격 접속이 된다 = SSH",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-066",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m66.gif?1694553792",
    "choices": [
      "㉠ HTML ㉡ URL",
      "㉠ HTML ㉡ 하이퍼텍스트",
      "㉠ 하이퍼텍스트 ㉡ HTML",
      "㉠ 하이퍼텍스트 ㉡ URL"
    ],
    "answer": 4,
    "explanation": "WWW는 하이퍼텍스트를 통해 웹페이지와 다른 콘텐츠를 연결합니다.\n하이퍼텍스트는 다른 텍스트나 콘텐츠로 연결되는 텍스트를 의미합니다.\n\n웹 서버의 자원에 접근하기 위해 URL (Uniform Resource Locator)을 사용합니다.\nURL은 웹 콘텐츠에 접근하기 위한 주소입니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-067",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 CentOS 7 시스템을 텔넷 서버로 사용하기 위해 설치해야 하는 패키지명으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "telnet",
      "telnet_server",
      "telnet-server",
      "server-telnet"
    ],
    "answer": 3,
    "explanation": "보통 설치 시 명령",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-068",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음은 원격지 SSH 서버에 계정을 변경해서 접속하는 과정이다. (괄호) 안에 들어갈 옵션으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m68.gif?1694553792",
    "choices": [
      "-l",
      "-n",
      "-p",
      "-x"
    ],
    "answer": 1,
    "explanation": "-n : ssh가 끝날 때 까지 터미널을 차지하지 않고 ssh를 백그라운드에서 실행\n-p : 포트 변경\n-x : X11 포워딩을 비활성화",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-069",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "인터넷 서비스",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 FTP 서버에 있는 파일을 로컬 시스템으로 가져올 때 사용하는 명령어로 알맞은 것은?",
    "passage": "",
    "choices": [
      "get",
      "put",
      "send",
      "hash"
    ],
    "answer": 1,
    "explanation": "get: 파일을 로컬 시스템으로 다운로드할 때\nput: 파일을 FTP 서버로 업로드 할 때",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-070",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 조건일 때 설정되는 게이트웨이 주소 값으로 가장 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m70.gif?1694553792",
    "choices": [
      "192.168.5.126",
      "192.168.5.127",
      "192.168.5.128",
      "192.168.5.129"
    ],
    "answer": 1,
    "explanation": "ip 대역 0 - 256\n서브넷 192는 접두사 길이 26. 4개로 분할됨\n1. 0 - 63\n2. 64 - 127\n3. 128 - 191\n4. 192 - 256\nip 주소는 66이므로 2번 대역 사용 중\n게이트웨이는 126",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-071",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 게이트웨이 주소 정보를 출력하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ip gw show",
      "ip gateway show",
      "ip route show",
      "ip add show"
    ],
    "answer": 3,
    "explanation": "ip route show : 라우팅 테이블을 보여주며, 여기에는 게이트웨이 정보도 포함\n예를 들어, 기본 게이트웨이는 \"default via",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-072",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 시스템에 장착된 이더넷 카드의 MAC 주소를 확인하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ip",
      "route",
      "mii-tool",
      "ethtool"
    ],
    "answer": 1,
    "explanation": "4. ethtool로 네트워크 인터페이스의 MAC 주소를 직접적으로 확인하기보다는, ethtool로 인터페이스 정보를 확인한 후 ip (또는 구형 시스템의 ifconfig) 명령어를 함께 사용해 MAC 주소를 확인하는 것이 일반적입니다. ethtool은 속도, 링크 상태 등 저수준 정보에 유용하며, MAC 주소 확인은 ip link show나 ifconfig 명령어로 확인 가능합니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-073",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 정보를 확인할 수 있는 파일로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m73.gif?1694553792",
    "choices": [
      "/etc/hosts",
      "/etc/named.conf",
      "/etc/resolv.conf",
      "/etc/sysconfig/network"
    ],
    "answer": 3,
    "explanation": "도메인이 나오면 /etc/hosts\n도메인 없이 네임스페이스 IP 면 /etc/resolv.conf",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-074",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 파일명으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m74.gif?1694553792",
    "choices": [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/sysconfig/network",
      "/etc/sysconfig/network-scripts"
    ],
    "answer": 1,
    "explanation": "/etc/sysconfig/network : 시스템 전체에 대한 global한 기본 게이트웨이주소, 호스트이름, 네트워크연결 허용여부 등을 설정",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-075",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 SYN Flooding 공격과 같은 네트워크 상태 정보를 확인하는 명령으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "ip",
      "ss",
      "arp",
      "ethtool"
    ],
    "answer": 2,
    "explanation": "ss 명령은 더 최신의 도구로서, netstat의 대안으로 사용 가능",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-076",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "네트워크 설정/보안",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 중 IPv4 네트워크 주소 체계에서 '/16'이 의미하는 서브넷 마스크값으로 알맞은 것은?",
    "passage": "",
    "choices": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.128"
    ],
    "answer": 2,
    "explanation": "/8 : 11111111.00000000.00000000.00000000 = 255.0.0.0\n/16 : 11111111.11111111.00000000.0000000 = 255.255.0.0",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-077",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "리눅스 응용/가상화",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 그림에 해당하는 기술로 가장 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m77.gif?1694553792",
    "choices": [
      "임베디드 시스템",
      "베어울프 클러스터",
      "고가용성 클러스터",
      "부하분산 클러스터"
    ],
    "answer": 3,
    "explanation": "노드나 서비스에 '이상'이 생겨도 서비스 유지가 가능\n쓸 수 있는 가능성이 높음. 고가용(高可用) High Availability",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-078",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "리눅스 응용/가상화",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 가상화 기술로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m78.gif?1694553792",
    "choices": [
      "Xen",
      "KVM",
      "Docker",
      "VirtualBox"
    ],
    "answer": 2,
    "explanation": "전가상화 방식 : KVM\n반가상화 방식 : Xen",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-079",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "리눅스 응용/가상화",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 해당하는 프로그램으로 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m79.gif?1694553792",
    "choices": [
      "Docker",
      "OpenStack",
      "Kubernetes",
      "Ansible"
    ],
    "answer": 3,
    "explanation": "정답은 3번 보기입니다. ComCBT 공개 해설과 정답을 기준으로 학습용으로 정리했습니다.",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  },
  {
    "id": "LM2-20230909-080",
    "exam": "2023-09-09",
    "subject": "리눅스 활용",
    "category": "리눅스 응용/가상화",
    "sourceType": "ComCBT 리눅스마스터 2급 필기 기출",
    "question": "다음 설명에 프로그램으로 가장 알맞은 것은?",
    "passage": "ComCBT 이미지/표 자료 참조: https://img.comcbt.com/cbt/data/r2/r220230909/r220230909m80.gif?1694553792",
    "choices": [
      "Hadoop",
      "NoSQL",
      "R",
      "Cassandra"
    ],
    "answer": 1,
    "explanation": "빅데이터 인프라 구축 관련 프로그램은 R이고\nHadoop은 대규모 데이터 분산처리를 지원하는 소프트웨어 프레임워크입니다",
    "source": "ComCBT 리눅스마스터 2급 필기 2023년 09월 09일(3회)",
    "sourceUrl": "https://www.comcbt.com/cbt/exam/15964/"
  }
];
