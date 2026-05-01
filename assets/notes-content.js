const CBT_LINK = "../cbt/linuxmaster2_cbt_01.html";

const NOTE_DATA = {
  "linux-basic": {
    title: "리눅스 일반",
    desc: "커널, GNU/Linux, 배포판, CLI/GUI, 파일시스템 계층과 GRUB을 시험 직전 강의 노트처럼 정리합니다.",
    intro: [
      "이 파트는 리눅스를 처음 배우는 사람에게는 배경지식처럼 보이지만, 필기시험에서는 배포판 계열, 디렉터리 역할, 커널과 운영체제의 관계를 섞어 자주 출제합니다.",
      "우선 Linux는 커널 중심 개념이고, Ubuntu는 Debian 계열, Rocky Linux는 Red Hat 계열이라는 식의 연결을 먼저 암기해야 합니다.",
      "디렉터리는 경로 자체보다 역할로 외우세요. /etc는 설정, /var는 로그와 가변 데이터, /tmp는 임시 파일입니다."
    ],
    concepts: [
      ["리눅스와 커널", "커널은 하드웨어와 응용 프로그램 사이에서 CPU, 메모리, 장치, 파일시스템, 프로세스를 관리하는 핵심입니다. 엄밀히 말하면 Linux는 운영체제 전체라기보다 커널을 가리키는 말로 출제됩니다."],
      ["GNU/Linux", "실제 배포판은 Linux 커널에 GNU 프로젝트의 셸, 컴파일러, 기본 명령어, 라이브러리, 설치 도구를 결합해 제공합니다. 그래서 GNU/Linux라는 표현이 나옵니다."],
      ["오픈소스와 자유 소프트웨어", "오픈소스는 소스 코드 공개와 협업 개발을 강조하고, 자유 소프트웨어는 사용, 연구, 수정, 재배포의 자유를 강조합니다. 시험에서는 둘 다 독점 소프트웨어와 대비되는 개념으로 묻습니다."],
      ["배포판", "배포판은 커널, GNU 도구, 패키지 저장소, 설치 프로그램, 데스크톱 환경을 묶어 사용자가 설치 가능한 형태로 만든 것입니다. Ubuntu, Debian, RHEL, CentOS, Rocky Linux, Fedora, openSUSE, Slackware가 대표 예시입니다."],
      ["CLI와 GUI", "CLI는 명령어로 조작하는 방식이고 GUI는 그래픽 환경에서 마우스와 창으로 조작하는 방식입니다. 리눅스 서버 관리 문제는 CLI 중심으로 나옵니다."],
      ["부트로더와 GRUB", "부트로더는 부팅 과정에서 커널을 찾아 메모리에 올립니다. GRUB은 리눅스에서 대표적으로 사용되는 부트로더이며 커널 선택, 부팅 옵션 전달과 연결됩니다."]
    ],
    tables: [
      { title: "배포판 계열 비교", head: ["계열", "대표 배포판", "시험 포인트"], rows: [["Debian 계열", "Debian, Ubuntu", "apt, dpkg와 연결"], ["Red Hat 계열", "RHEL, CentOS, Rocky Linux, Fedora", "rpm, yum, dnf와 연결"], ["Slackware 계열", "Slackware, openSUSE는 별도 계열로 자주 비교", "전통적·단순 구조, 계열 분류 문제 주의"]] },
      { title: "파일시스템 계층 암기표", head: ["디렉터리", "역할"], rows: [["/", "모든 경로의 시작점인 루트"], ["/home", "일반 사용자 홈 디렉터리"], ["/etc", "시스템 설정 파일"], ["/var", "로그, 스풀, 캐시처럼 변하는 데이터"], ["/usr", "사용자 프로그램, 라이브러리, 문서"], ["/bin", "일반 사용자 필수 명령"], ["/sbin", "시스템 관리용 필수 명령"], ["/tmp", "임시 파일"], ["/dev", "장치 파일"], ["/proc", "커널과 프로세스 정보를 보여주는 가상 파일시스템"]] }
    ],
    code: "Linux kernel + GNU tools + package manager + installer = distribution\n/etc  : configuration\n/var  : logs and variable data\n/tmp  : temporary files\nGRUB  : boot loader",
    traps: ["Linux는 운영체제 전체라기보다 커널 중심 개념으로 묻는다.", "Ubuntu는 Debian 계열이다.", "Rocky Linux는 Red Hat 계열이다.", "/etc는 설정 파일 위치다.", "/var는 로그와 가변 데이터 위치다.", "/tmp는 임시 파일 위치다."],
    quizzes: [
      ["Linux에 대한 설명으로 가장 적절한 것은?", ["항상 GUI 환경만 의미한다.", "커널 중심 개념으로 이해하는 것이 정확하다.", "Debian의 패키지 관리자 이름이다.", "GNU 프로젝트의 셸 이름이다."], 2, "Linux는 하드웨어 자원을 관리하는 커널 중심 개념입니다."],
      ["Ubuntu의 계열로 옳은 것은?", ["Red Hat", "Debian", "Slackware", "BSD"], 2, "Ubuntu는 Debian 계열이며 apt, dpkg와 연결됩니다."],
      ["/etc의 주된 용도는?", ["장치 파일", "사용자 홈", "설정 파일", "임시 파일"], 3, "/etc는 시스템 설정 파일이 주로 위치합니다."],
      ["로그 파일이 주로 저장되는 디렉터리는?", ["/bin", "/var", "/dev", "/proc"], 2, "/var는 로그처럼 계속 변하는 데이터를 담습니다."],
      ["GRUB에 대한 설명으로 옳은 것은?", ["텍스트 편집기", "부트로더", "압축 도구", "패키지 관리자"], 2, "GRUB은 커널을 선택하고 로드하는 부트로더입니다."]
    ],
    memory: ["Linux는 커널 중심 개념.", "GNU/Linux는 Linux 커널과 GNU 도구의 결합.", "배포판은 커널, 도구, 저장소, 설치기를 묶은 형태.", "Ubuntu와 Debian은 Debian 계열.", "RHEL, CentOS, Rocky Linux, Fedora는 Red Hat 계열.", "/etc는 설정 파일.", "/var는 로그와 가변 데이터.", "/tmp는 임시 파일.", "/dev는 장치 파일.", "GRUB은 부트로더."]
  },
  "file-command": {
    title: "파일 및 디렉터리 명령어",
    desc: "파일 조작, 검색, 필터, 리다이렉션, 파이프, 링크를 시험식으로 비교합니다.",
    intro: ["명령어 문제는 옵션 하나로 정답이 갈립니다. 특히 rm, cp, find, grep, tail, 리다이렉션, 링크는 반복 출제됩니다.", "단순히 명령어 뜻만 외우지 말고 입력과 출력의 흐름을 그려야 합니다. >는 덮어쓰기, >>는 추가, |는 앞 명령의 출력을 뒤 명령의 입력으로 넘깁니다.", "하드 링크는 inode 공유, 심볼릭 링크는 경로 참조라는 차이를 우선 암기하세요."],
    concepts: [["기본 이동과 조회", "pwd는 현재 위치, cd는 디렉터리 이동, ls는 목록 조회입니다. ls -l은 자세히 보기, ls -a는 숨김 파일 포함입니다."], ["생성·삭제·복사·이동", "mkdir은 디렉터리 생성, rmdir은 비어 있는 디렉터리 삭제, cp는 복사, mv는 이동 또는 이름 변경, rm은 삭제입니다. 디렉터리 복사는 cp -r이 필요합니다."], ["내용 확인", "touch는 빈 파일 생성 또는 시간 갱신, cat은 전체 출력, more와 less는 페이지 단위 보기, head와 tail은 앞·뒤 일부 출력입니다. tail -f는 로그 감시 문제에 자주 나옵니다."], ["검색과 필터", "find는 파일명, 종류, 크기, 시간 조건으로 검색하고 grep은 파일 내용에서 패턴을 찾습니다. wc, sort, uniq, cut, paste는 텍스트 처리 명령입니다."], ["리다이렉션과 파이프", ">는 표준출력을 파일로 덮어쓰고 >>는 추가합니다. <는 파일을 표준입력으로 사용합니다. 2>는 표준에러 리다이렉션, 2>&1은 표준에러를 표준출력으로 합칩니다."], ["링크", "ln은 하드 링크, ln -s는 심볼릭 링크를 만듭니다. 하드 링크는 같은 inode를 공유하고, 심볼릭 링크는 원본 경로를 가리킵니다."]],
    tables: [{ title: "명령어 비교표", head: ["명령어", "핵심"], rows: [["pwd/cd/ls", "현재 위치, 이동, 목록"], ["mkdir/rmdir", "디렉터리 생성, 빈 디렉터리 삭제"], ["cp/mv/rm", "복사, 이동/이름변경, 삭제"], ["touch/cat/more/less", "파일 생성·시간갱신, 출력, 페이지 보기"], ["head/tail/tail -f", "앞부분, 뒷부분, 실시간 추적"], ["find/grep", "파일 검색, 내용 검색"], ["wc/sort/uniq", "줄·단어 수, 정렬, 중복 제거"], ["cut/paste", "열 추출, 열 병합"]] }, { title: "리다이렉션과 링크", head: ["표현", "의미"], rows: [[">", "표준출력을 파일로 덮어쓰기"], [">>", "표준출력을 파일 끝에 추가"], ["<", "파일을 표준입력으로 사용"], ["2>", "표준에러를 파일로 보냄"], ["2>&1", "표준에러를 표준출력과 같은 곳으로 보냄"], ["|", "앞 명령 출력을 뒤 명령 입력으로 전달"], ["ln", "하드 링크 생성"], ["ln -s", "심볼릭 링크 생성"]] }],
    code: "ls -al /etc\ncp -r dir1 dir2\nfind /var/log -name '*.log' -type f\ngrep -in 'error' app.log\ntail -f /var/log/messages\ncommand > out.txt 2>&1\nln original hardlink\nln -s /path/original symlink",
    traps: ["rm -r은 디렉터리를 재귀 삭제하고 rm -f는 확인 없이 강제 삭제한다.", "cp -r은 디렉터리 복사에 필요하다.", "tail -f는 파일 끝을 계속 추적한다.", "grep -i는 대소문자 무시, -n은 줄 번호, -v는 불일치 출력이다.", "find -name은 이름, -type은 파일 종류, -exec는 검색 결과에 명령 실행이다.", ">는 덮어쓰기, >>는 추가다.", "2>&1은 표준에러를 표준출력으로 합친다.", "hard link는 원본과 inode를 공유한다.", "symbolic link는 경로를 참조한다."],
    quizzes: [["디렉터리를 포함해 복사할 때 필요한 cp 옵션은?", ["-f", "-r", "-i", "-n"], 2, "cp -r은 디렉터리 내용을 재귀적으로 복사합니다."], ["로그 파일의 새 내용을 계속 확인하는 명령은?", ["head -f", "tail -f", "cat -n", "sort -f"], 2, "tail -f는 파일 끝을 따라가며 추가 내용을 보여줍니다."], ["표준출력을 파일 끝에 추가하는 기호는?", [">", ">>", "<", "2>"], 2, ">>는 기존 내용을 유지하고 뒤에 추가합니다."], ["grep -v의 의미는?", ["대소문자 무시", "줄 번호 표시", "불일치 행 출력", "재귀 검색"], 3, "grep -v는 패턴과 맞지 않는 줄을 출력합니다."], ["하드 링크의 특징은?", ["항상 다른 파일시스템에 만들 수 있다.", "원본과 inode를 공유한다.", "원본 경로 문자열만 저장한다.", "디렉터리에만 사용된다."], 2, "하드 링크는 같은 inode를 가리킵니다."]],
    memory: ["pwd는 현재 경로.", "cd는 이동, ls는 목록.", "mkdir 생성, rmdir은 빈 디렉터리 삭제.", "cp -r은 디렉터리 복사.", "rm -r은 재귀 삭제, rm -f는 강제 삭제.", "tail -f는 로그 실시간 추적.", "find는 파일 검색, grep은 내용 검색.", "> 덮어쓰기, >> 추가.", "2>&1은 에러를 출력과 합침.", "ln은 하드 링크, ln -s는 심볼릭 링크."]
  },
  "permission": {
    title: "권한·소유권·특수권한",
    desc: "ls -l, chmod, chown, chgrp, umask, SetUID/SetGID/Sticky Bit 계산을 집중 정리합니다.",
    intro: ["권한 파트는 계산 문제와 개념 함정이 함께 나옵니다. 시험 직전에는 rwx 숫자 변환, 디렉터리 권한 의미, umask, 특수권한 앞자리 계산을 반복해야 합니다.", "ls -l의 첫 문자는 파일 종류, 뒤 9글자는 user/group/others 권한입니다. 네 자리 chmod에서 맨 앞자리는 특수권한입니다.", "permission.html은 특히 1770부터 7770까지의 계산을 빠르게 읽는 연습이 중요합니다."],
    concepts: [["ls -l 권한 구조", "예: -rwxr-sr-t 1 user group 123 file. 첫 글자는 파일 종류, 다음 3글자는 user, 다음 3글자는 group, 마지막 3글자는 others 권한입니다."], ["파일 종류 문자", "-는 일반 파일, d는 디렉터리, l은 심볼릭 링크, c는 문자 장치, b는 블록 장치, p는 파이프, s는 소켓입니다."], ["파일의 r/w/x", "파일에서 r은 내용 읽기, w는 내용 수정, x는 실행입니다. 실행 파일이라도 x가 없으면 직접 실행할 수 없습니다."], ["디렉터리의 r/w/x", "디렉터리에서 r은 목록 조회, w는 생성·삭제·이름 변경, x는 접근·탐색입니다. 디렉터리 x가 없으면 하위 파일 접근이 막힙니다."], ["chmod 숫자 모드", "r=4, w=2, x=1을 더합니다. 770은 user=rwx, group=rwx, others=---입니다."], ["chmod 기호 모드", "u, g, o, a와 +, -, =를 조합합니다. chmod g+w file은 그룹에 쓰기 권한을 추가합니다."], ["소유권 변경", "chown은 소유자 변경, chgrp는 그룹 변경입니다. chown user:group file처럼 소유자와 그룹을 동시에 바꿀 수 있습니다."], ["umask", "새 파일 기본 권한은 666, 새 디렉터리 기본 권한은 777에서 umask 값을 제거해 계산합니다. 예: umask 022이면 파일은 644, 디렉터리는 755가 됩니다."], ["특수권한", "SetUID=4는 실행 시 파일 소유자 권한, SetGID=2는 실행 시 그룹 권한 또는 디렉터리 하위 파일 그룹 상속, Sticky Bit=1은 공유 디렉터리 삭제 제한입니다."], ["s/S와 t/T", "s나 t는 해당 실행 권한이 있는 상태의 특수권한 표시입니다. S나 T는 실행 권한이 없는데 특수권한만 설정된 상태입니다."]],
    tables: [{ title: "권한 숫자표", head: ["표기", "숫자", "의미"], rows: [["r--", "4", "읽기"], ["-w-", "2", "쓰기"], ["--x", "1", "실행/탐색"], ["rw-", "6", "읽기+쓰기"], ["r-x", "5", "읽기+실행"], ["rwx", "7", "모든 권한"]] }, { title: "chmod 특수권한 계산", head: ["명령", "특수권한", "일반 권한"], rows: [["chmod 1770", "Sticky Bit", "rwxrwx---"], ["chmod 2770", "SetGID", "rwxrwx---"], ["chmod 3770", "SetGID+Sticky Bit", "rwxrwx---"], ["chmod 4770", "SetUID", "rwxrwx---"], ["chmod 5770", "SetUID+Sticky Bit", "rwxrwx---"], ["chmod 6770", "SetUID+SetGID", "rwxrwx---"], ["chmod 7770", "SetUID+SetGID+Sticky Bit", "rwxrwx---"]] }, { title: "파일 종류 문자", head: ["문자", "의미"], rows: [["-", "일반 파일"], ["d", "디렉터리"], ["l", "심볼릭 링크"], ["c", "문자 장치"], ["b", "블록 장치"], ["p", "파이프"], ["s", "소켓"]] }],
    code: "chmod 755 script.sh      # rwxr-xr-x\nchmod u+x file          # user에 실행 추가\nchown user:group file   # 소유자와 그룹 변경\numask 022               # 파일 644, 디렉터리 755\nchmod 1777 /tmp         # sticky bit 공유 임시 디렉터리",
    traps: ["디렉터리의 x는 실행이 아니라 접근/탐색이다.", "sticky bit는 공유 디렉터리에서 삭제 제한을 거는 권한이다.", "SetGID 디렉터리는 하위 파일의 그룹 상속과 연결된다.", "S/T는 실행 권한이 없는 상태에서 특수권한만 설정된 표시다.", "파일 umask 계산은 666에서 시작한다.", "디렉터리 umask 계산은 777에서 시작한다.", "특수권한 숫자는 4=SetUID, 2=SetGID, 1=Sticky Bit 순서다."],
    quizzes: [["ls -l에서 첫 글자 d는 무엇을 뜻하는가?", ["일반 파일", "디렉터리", "심볼릭 링크", "소켓"], 2, "첫 글자 d는 디렉터리를 의미합니다."], ["chmod 754 file의 group 권한은?", ["rwx", "r-x", "rw-", "r--"], 2, "754에서 두 번째 숫자 5는 r-x입니다."], ["디렉터리에서 x 권한의 의미는?", ["파일 실행", "내용 수정", "접근과 탐색", "소유자 변경"], 3, "디렉터리 x는 들어가거나 하위 항목에 접근하는 탐색 권한입니다."], ["umask 022일 때 새 일반 파일 권한은?", ["777", "755", "666", "644"], 4, "파일은 666에서 022를 제거해 644가 됩니다."], ["SetGID 숫자는?", ["1", "2", "4", "7"], 2, "특수권한에서 2는 SetGID입니다."], ["chmod 3770의 특수권한 조합은?", ["SetUID+SetGID", "SetGID+Sticky Bit", "SetUID+Sticky Bit", "Sticky Bit만"], 2, "3은 2+1이므로 SetGID와 Sticky Bit입니다."], ["권한 표시에서 대문자 T가 의미하는 것은?", ["sticky bit가 있고 others 실행 권한도 있음", "sticky bit가 있지만 others 실행 권한은 없음", "SetUID가 있지만 user 실행 권한 없음", "SetGID가 있고 group 실행 권한 있음"], 2, "T는 sticky bit가 설정됐지만 해당 실행 권한이 없는 상태입니다."]],
    memory: ["ls -l 첫 글자는 파일 종류.", "권한은 user/group/others 순서.", "r=4, w=2, x=1.", "파일 x는 실행, 디렉터리 x는 접근/탐색.", "chmod 770은 rwxrwx---.", "파일 기본 권한은 666.", "디렉터리 기본 권한은 777.", "umask는 기본 권한에서 제거.", "4=SetUID, 2=SetGID, 1=Sticky Bit.", "s/t는 실행 권한 있음, S/T는 실행 권한 없음."]
  },
  "process": {
    title: "프로세스 및 작업 관리",
    desc: "PID, PPID, foreground/background, ps, top, kill, signal, nice, nohup, cron/at을 정리합니다.",
    intro: ["프로세스 문제는 명령어와 시그널 번호·이름을 함께 묻습니다. kill은 무조건 강제 종료가 아니라 기본적으로 SIGTERM을 보냅니다.", "작업 제어에서는 &, jobs, fg, bg, Ctrl+C, Ctrl+Z가 핵심입니다. Ctrl+C는 SIGINT, Ctrl+Z는 중지입니다.", "nice와 renice는 우선순위 조정, nohup은 로그아웃 후 실행 유지로 외우세요."],
    concepts: [["프로세스, PID, PPID", "프로세스는 실행 중인 프로그램입니다. PID는 프로세스 ID, PPID는 부모 프로세스 ID입니다."], ["foreground와 background", "foreground는 터미널을 점유하며 실행되고, background는 뒤에서 실행됩니다. 명령 뒤에 &를 붙이면 백그라운드 실행입니다."], ["작업 제어", "jobs는 현재 셸의 작업 목록, fg는 포그라운드 전환, bg는 중지된 작업을 백그라운드로 재개합니다. Ctrl+C는 인터럽트, Ctrl+Z는 일시 중지입니다."], ["ps와 top", "ps는 순간 상태를 보고 top은 실시간 상태를 봅니다. ps -ef는 System V 스타일, ps aux는 BSD 스타일입니다. ps --pid PID는 특정 PID 조회입니다."], ["kill, killall, pkill", "kill은 PID 대상, killall은 프로세스 이름 대상, pkill은 이름이나 조건 패턴 대상입니다."], ["signal", "SIGTERM은 정상 종료 요청, SIGKILL은 강제 종료, SIGHUP은 터미널 끊김/설정 재읽기, SIGINT는 Ctrl+C, SIGSTOP은 중지, SIGCONT는 재개입니다."], ["nice, renice, nohup", "nice는 새 프로세스 시작 시 우선순위 조정, renice는 실행 중인 프로세스 조정입니다. nohup은 로그아웃 후에도 실행을 유지합니다."], ["cron과 at", "cron은 반복 예약 작업, at은 한 번 실행할 예약 작업입니다."]],
    tables: [{ title: "ps 비교", head: ["명령", "의미"], rows: [["ps", "현재 터미널의 프로세스"], ["ps -ef", "전체 프로세스, System V 스타일"], ["ps aux", "전체 프로세스, BSD 스타일"], ["ps --pid 1234", "특정 PID 조회"], ["top", "실시간 프로세스 모니터링"]] }, { title: "시그널 암기표", head: ["시그널", "의미"], rows: [["SIGTERM", "정상 종료 요청, kill 기본값"], ["SIGKILL", "강제 종료, 잡거나 무시 불가"], ["SIGHUP", "연결 끊김 또는 설정 재읽기"], ["SIGINT", "인터럽트, Ctrl+C"], ["SIGSTOP", "중지"], ["SIGCONT", "중지된 프로세스 계속 실행"]] }],
    code: "sleep 100 &\njobs\nfg %1\nbg %1\nps -ef\nps aux\nkill -TERM 1234\nkill -9 1234\nnohup ./backup.sh &",
    traps: ["kill 명령의 기본 시그널은 SIGTERM이다.", "SIGKILL은 잡거나 무시할 수 없다.", "Ctrl+C는 SIGINT다.", "Ctrl+Z는 프로세스를 중지한다.", "&는 백그라운드 실행이다.", "nohup은 로그아웃 후에도 실행 유지와 관련된다.", "ps -ef와 ps aux는 출력 스타일이 다르다."],
    quizzes: [["kill 명령의 기본 시그널은?", ["SIGKILL", "SIGTERM", "SIGSTOP", "SIGCONT"], 2, "kill은 기본적으로 SIGTERM을 보냅니다."], ["Ctrl+C가 보내는 시그널은?", ["SIGINT", "SIGHUP", "SIGKILL", "SIGSTOP"], 1, "Ctrl+C는 인터럽트인 SIGINT입니다."], ["백그라운드 실행 기호는?", ["|", "&", ">", "<"], 2, "명령 끝의 &는 백그라운드 실행입니다."], ["실시간 프로세스 상태 확인 명령은?", ["ps", "top", "jobs", "fg"], 2, "top은 실시간으로 프로세스 상태를 보여줍니다."], ["반복 예약 작업에 적합한 것은?", ["at", "cron", "fg", "renice"], 2, "cron은 주기적 반복 작업 예약에 사용됩니다."]],
    memory: ["프로세스는 실행 중인 프로그램.", "PID는 프로세스 ID, PPID는 부모 PID.", "&는 백그라운드 실행.", "jobs는 작업 목록.", "fg는 앞으로, bg는 뒤에서 계속.", "Ctrl+C는 SIGINT.", "Ctrl+Z는 중지.", "kill 기본은 SIGTERM.", "kill -9는 SIGKILL.", "cron은 반복, at은 1회 예약."]
  },
  "shell": {
    title: "셸·환경변수·스크립트",
    desc: "셸 종류, 시작 파일, 환경변수, PATH, alias, history, 기본 스크립트 문법을 정리합니다.",
    intro: ["셸 파트는 로그인 상황별 시작 파일과 환경변수 전달 여부가 자주 나옵니다. .bashrc와 .bash_profile의 차이를 먼저 잡아야 합니다.", "PATH는 명령어 검색 경로이고 export는 자식 프로세스에 변수를 넘기는 명령입니다.", "스크립트 문법은 깊게 코딩하기보다 #!/bin/bash, if, for, while, case의 역할을 구분하는 수준으로 출제됩니다."],
    concepts: [["셸의 역할", "셸은 사용자 명령을 해석해 커널이 실행할 수 있도록 연결하는 명령어 해석기입니다."], ["셸 종류", "Bourne Shell은 sh, C Shell은 csh, Korn Shell은 ksh, Bash는 GNU Bourne Again Shell, zsh는 확장 기능이 많은 셸입니다."], ["login/non-login", "login shell은 로그인할 때 시작되는 셸이고, non-login shell은 터미널 창을 추가로 열거나 스크립트 실행 시 사용될 수 있습니다."], ["interactive/non-interactive", "interactive shell은 사용자가 직접 명령을 입력하는 셸이고, non-interactive shell은 스크립트처럼 자동 실행되는 셸입니다."], ["시작 파일", "/etc/profile은 시스템 전체 로그인 설정, ~/.bash_profile은 사용자 로그인 셸 설정, ~/.bashrc는 주로 대화형 non-login bash 설정입니다."], ["환경변수와 지역변수", "지역변수는 현재 셸에서만 쓰이고 export된 환경변수는 자식 프로세스에 전달됩니다. PATH는 실행 파일 검색 경로입니다."], ["alias와 history", "alias는 명령 별칭을 만들고 history는 이전 명령 목록을 확인합니다."], ["셸 스크립트", "#!/bin/bash는 실행 해석기를 지정합니다. if는 조건, for와 while은 반복, case는 값에 따른 분기입니다."]],
    tables: [{ title: "셸 종류", head: ["셸", "설명"], rows: [["sh", "Bourne Shell"], ["csh", "C Shell"], ["ksh", "Korn Shell"], ["bash", "Bourne Again Shell, 리눅스 기본 셸로 자주 등장"], ["zsh", "확장 기능과 플러그인이 많은 셸"]] }, { title: "bash 시작 파일", head: ["파일", "읽히는 상황"], rows: [["/etc/profile", "시스템 전체 로그인 셸 설정"], ["~/.bash_profile", "사용자 로그인 bash 설정"], ["~/.bashrc", "사용자 대화형 non-login bash 설정"]] }],
    code: "#!/bin/bash\nNAME=linux\nexport PATH=\"$PATH:/opt/bin\"\nalias ll='ls -al'\nif [ -f /etc/passwd ]; then echo ok; fi\nfor f in *.log; do echo \"$f\"; done\nwhile true; do break; done\ncase \"$1\" in start) echo start;; stop) echo stop;; esac",
    traps: [".bashrc와 .bash_profile은 읽히는 상황이 다르다.", "export 해야 자식 프로세스에 전달된다.", "PATH는 명령어 검색 경로다.", "C Shell은 csh다.", "#!/bin/bash는 스크립트 실행 해석기를 지정한다.", "지역변수는 현재 셸 범위에 머문다."],
    quizzes: [["PATH의 역할은?", ["파일 삭제 경로", "명령어 검색 경로", "로그 저장 경로", "사용자 홈 경로"], 2, "PATH는 실행 명령을 찾을 디렉터리 목록입니다."], ["자식 프로세스에 변수를 전달하려면?", ["alias", "export", "history", "case"], 2, "export된 변수만 환경변수로 전달됩니다."], ["C Shell의 명령 이름은?", ["bash", "csh", "ksh", "zsh"], 2, "C Shell은 csh입니다."], ["#!/bin/bash의 의미는?", ["주석 전용 문장", "해석기 지정", "환경변수 삭제", "명령 기록 출력"], 2, "shebang은 스크립트를 실행할 해석기를 지정합니다."], ["주로 대화형 non-login bash에서 읽는 파일은?", ["~/.bashrc", "/etc/passwd", "/var/log", "/bin/bash"], 1, "~/.bashrc는 대화형 non-login bash 설정에 자주 쓰입니다."]],
    memory: ["셸은 명령어 해석기.", "sh는 Bourne Shell.", "csh는 C Shell.", "ksh는 Korn Shell.", "bash는 Bourne Again Shell.", "/etc/profile은 전체 로그인 설정.", ".bash_profile은 사용자 로그인 bash.", ".bashrc는 대화형 non-login bash.", "export는 자식 프로세스 전달.", "PATH는 명령어 검색 경로."]
  },
  "editor": {
    title: "vi 편집기",
    desc: "vi/Vim 모드, 입력·저장·종료, 삭제·복사·붙여넣기, 검색·치환을 정리합니다.",
    intro: ["vi 문제는 실제 편집보다 모드 전환과 명령 구분이 중요합니다. 명령 모드, 입력 모드, ex 모드를 구분하면 대부분 풀립니다.", "i, a, o는 입력 모드 진입이지만 위치가 다릅니다. :w, :q, :wq, :q!는 콜론으로 시작하는 ex 명령입니다.", "dd, yy, p, u, 검색, 치환은 빈출이므로 손으로 한 번씩 써보며 암기하세요."],
    concepts: [["vi/Vim", "vi는 유닉스 계열 기본 편집기이고 Vim은 vi 개선판입니다. 시험에서는 vi 명령을 중심으로 출제됩니다."], ["명령 모드", "커서 이동, 삭제, 복사, 붙여넣기 같은 일반 명령을 입력하는 기본 모드입니다."], ["입력 모드", "실제 문자를 입력하는 모드입니다. i는 현재 커서 앞, a는 현재 커서 뒤, o는 아래 새 줄을 열고 입력합니다. ESC로 명령 모드로 돌아갑니다."], ["ex 모드", "콜론(:)으로 시작하는 저장, 종료, 설정, 치환 명령을 입력합니다."], ["저장과 종료", ":w는 저장, :q는 종료, :wq는 저장 후 종료, :q!는 저장하지 않고 강제 종료입니다."], ["편집 명령", "x는 한 글자 삭제, dd는 한 줄 삭제, yy는 한 줄 복사, p는 붙여넣기, u는 되돌리기입니다."], ["검색과 치환", "/검색어는 아래 방향 검색, n은 다음 결과, N은 이전 결과입니다. :%s/old/new/g는 전체 문서에서 old를 new로 모두 바꿉니다."], ["행 이동과 번호", "gg는 첫 줄, G는 마지막 줄, 숫자G는 해당 줄로 이동합니다. :set number와 :set nonumber는 줄 번호 표시와 해제입니다."]],
    tables: [{ title: "vi 명령 암기표", head: ["명령", "의미"], rows: [["i", "커서 앞 입력"], ["a", "커서 뒤 입력"], ["o", "아래 새 줄 입력"], ["ESC", "명령 모드 복귀"], [":w", "저장"], [":q", "종료"], [":wq", "저장 후 종료"], [":q!", "저장하지 않고 종료"], ["x", "한 글자 삭제"], ["dd", "한 줄 삭제"], ["yy", "한 줄 복사"], ["p", "붙여넣기"], ["u", "되돌리기"]] }],
    code: "vi memo.txt\ni        # 입력 모드\nESC      # 명령 모드\n:wq      # 저장 후 종료\n:%s/old/new/g\n:set number\ngg\nG\n10G",
    traps: ["콜론 명령과 일반 명령을 구분해야 한다.", "i/a/o는 모두 입력 모드지만 시작 위치가 다르다.", "dd는 한 줄 삭제다.", "yy는 한 줄 복사다.", "p는 붙여넣기다.", ":q!는 저장하지 않고 종료한다.", "u는 되돌리기다."],
    quizzes: [["vi에서 저장 후 종료 명령은?", [":w", ":q", ":wq", ":q!"], 3, ":wq는 write 후 quit입니다."], ["현재 줄을 삭제하는 명령은?", ["x", "dd", "yy", "p"], 2, "dd는 한 줄 삭제입니다."], ["검색 후 다음 결과로 이동하는 키는?", ["n", "N", "G", "u"], 1, "n은 다음 검색 결과입니다."], ["줄 번호 표시 명령은?", [":set number", ":set nonumber", ":number off", ":show line"], 1, ":set number가 줄 번호 표시입니다."], ["커서 아래 새 줄을 열고 입력하는 명령은?", ["i", "a", "o", "p"], 3, "o는 아래에 새 줄을 만들고 입력 모드로 갑니다."]],
    memory: ["vi는 모드형 편집기.", "명령 모드가 기본.", "i는 앞 입력.", "a는 뒤 입력.", "o는 아래 새 줄.", "ESC는 명령 모드 복귀.", ":w 저장, :q 종료.", ":wq 저장 후 종료.", ":q! 저장 없이 종료.", "dd 삭제, yy 복사, p 붙여넣기, u 되돌리기."]
  },
  "package": {
    title: "패키지·압축·백업",
    desc: "rpm/yum/dnf, dpkg/apt, tar와 gzip/bzip2/xz/zip을 비교합니다.",
    intro: ["패키지와 압축은 계열 구분 문제와 옵션 문제가 함께 나옵니다. Red Hat 계열은 rpm/yum/dnf, Debian 계열은 dpkg/apt로 묶어 외우세요.", "tar는 원래 여러 파일을 하나로 묶는 도구이고 gzip, bzip2, xz는 압축 도구입니다. tar 옵션 z, j, J가 어떤 압축과 연결되는지 중요합니다.", "apt update와 apt upgrade 차이는 저장소 목록 갱신과 실제 패키지 업그레이드입니다."],
    concepts: [["Red Hat 계열", "rpm은 저수준 패키지 명령, yum과 dnf는 저장소를 이용해 의존성을 처리하는 고수준 도구입니다."], ["Debian 계열", "dpkg는 .deb 파일을 직접 다루고 apt, apt-get은 저장소 기반 설치와 업그레이드를 처리합니다."], ["rpm 옵션", "-qa는 전체 패키지 조회, -qi는 정보, -ql은 파일 목록, -qf는 특정 파일 소유 패키지, -ivh는 설치, -Uvh는 업그레이드, -e는 삭제입니다."], ["dpkg 옵션", "-i는 설치, -r은 삭제, -l은 목록, -L은 패키지 파일 목록입니다."], ["apt update/upgrade", "apt update는 저장소 패키지 목록 갱신, apt upgrade는 설치된 패키지를 새 버전으로 업그레이드합니다."], ["tar와 압축", "tar c는 생성, x는 해제, v는 자세히, f는 파일명 지정입니다. z는 gzip, j는 bzip2, J는 xz와 연결됩니다."], ["압축 도구", "gzip/gunzip, bzip2/bunzip2, xz/unxz는 각각 압축과 해제입니다. zip/unzip은 zip 형식 압축과 해제입니다."]],
    tables: [{ title: "패키지 명령 비교", head: ["계열", "명령", "핵심"], rows: [["Red Hat", "rpm", "로컬 rpm 패키지 직접 관리"], ["Red Hat", "yum", "저장소 기반 의존성 처리"], ["Red Hat", "dnf", "yum 후속 도구"], ["Debian", "dpkg", "로컬 deb 패키지 직접 관리"], ["Debian", "apt/apt-get", "저장소 기반 설치·업그레이드"]] }, { title: "tar 옵션", head: ["옵션", "의미"], rows: [["c", "아카이브 생성"], ["x", "아카이브 해제"], ["v", "진행 내용 표시"], ["f", "파일명 지정"], ["z", "gzip 사용"], ["j", "bzip2 사용"], ["J", "xz 사용"]] }],
    code: "rpm -qa\nrpm -qi bash\nrpm -ql bash\nrpm -qf /bin/bash\nrpm -ivh pkg.rpm\nrpm -Uvh pkg.rpm\nrpm -e pkg\ndpkg -i pkg.deb\napt update\napt upgrade\ntar -czf backup.tar.gz /etc\ntar -xzf backup.tar.gz",
    traps: ["tar 자체는 묶기다.", "gzip/bzip2/xz는 압축이다.", "tar -czf는 gzip으로 압축 생성이다.", "tar -xzf는 gzip 압축 해제다.", "Red Hat 계열은 rpm/yum/dnf다.", "Debian 계열은 dpkg/apt다.", "apt update는 목록 갱신, apt upgrade는 실제 업그레이드다."],
    quizzes: [["Red Hat 계열 패키지 도구가 아닌 것은?", ["rpm", "yum", "dnf", "dpkg"], 4, "dpkg는 Debian 계열입니다."], ["rpm -qa의 의미는?", ["설치", "삭제", "전체 패키지 조회", "파일 소유 패키지 조회"], 3, "-qa는 설치된 모든 패키지를 조회합니다."], ["apt update의 의미는?", ["패키지 목록 갱신", "패키지 삭제", "커널 컴파일", "압축 해제"], 1, "apt update는 저장소 정보 목록을 갱신합니다."], ["tar에서 gzip을 의미하는 옵션은?", ["z", "j", "J", "v"], 1, "z는 gzip과 연결됩니다."], ["tar -xzf backup.tar.gz의 의미는?", ["gzip 압축 생성", "gzip 압축 해제", "bzip2 압축 생성", "xz 압축 해제"], 2, "x는 해제, z는 gzip, f는 파일 지정입니다."]],
    memory: ["Red Hat 계열은 rpm/yum/dnf.", "Debian 계열은 dpkg/apt.", "rpm -qa는 전체 조회.", "rpm -qi는 정보.", "rpm -ql은 파일 목록.", "dpkg -i는 설치.", "apt update는 목록 갱신.", "apt upgrade는 업그레이드.", "tar는 묶기.", "z=gzip, j=bzip2, J=xz."]
  },
  "network": {
    title: "네트워크 및 서비스",
    desc: "IP, 서브넷, 게이트웨이, DNS, TCP/UDP, 주요 포트와 진단 명령을 정리합니다.",
    intro: ["네트워크 파트는 포트 번호 암기가 점수로 바로 이어집니다. SSH 22, Telnet 23, DNS 53, HTTP 80, HTTPS 443은 반드시 외워야 합니다.", "TCP는 연결지향, UDP는 비연결지향이라는 비교가 자주 나옵니다. ping은 TCP/UDP가 아니라 ICMP 기반입니다.", "명령어는 ip addr, ip route, ping, traceroute/tracepath, netstat, ss의 용도를 구분하세요."],
    concepts: [["IP 주소와 서브넷", "IP 주소는 네트워크에서 장치를 식별하는 주소입니다. 서브넷은 네트워크 범위를 나누는 기준으로, 같은 네트워크인지 판단하는 데 사용됩니다."], ["게이트웨이와 DNS", "게이트웨이는 다른 네트워크로 나가는 출구입니다. DNS는 도메인 이름을 IP 주소로 바꿔 줍니다."], ["TCP와 UDP", "TCP는 연결을 맺고 신뢰성을 확인하는 연결지향 프로토콜입니다. UDP는 연결 절차가 단순한 비연결지향 프로토콜입니다."], ["포트 번호", "서비스를 구분하는 번호입니다. 같은 서버라도 22번은 SSH, 80번은 HTTP처럼 포트로 서비스를 구분합니다."], ["진단 명령", "ping은 ICMP로 연결성을 확인하고 traceroute 또는 tracepath는 경로를 추적합니다. ip addr는 주소, ip route는 라우팅을 봅니다."], ["서비스 명령과 프로토콜", "ssh는 암호화 원격 접속, telnet은 평문 원격 접속, ftp는 파일 전송, sftp는 SSH 기반 파일 전송입니다. http/https는 웹, smtp/pop3/imap은 메일과 연결됩니다."], ["ifconfig, netstat, ss", "ifconfig와 netstat은 전통 명령이고, ip와 ss는 현대 리눅스에서 자주 쓰이는 대체 명령입니다. 시험에서는 둘 다 나올 수 있습니다."]],
    tables: [{ title: "주요 포트 번호", head: ["서비스", "포트"], rows: [["FTP 데이터", "20"], ["FTP 제어", "21"], ["SSH", "22"], ["Telnet", "23"], ["SMTP", "25"], ["DNS", "53"], ["HTTP", "80"], ["POP3", "110"], ["IMAP", "143"], ["HTTPS", "443"]] }, { title: "네트워크 명령", head: ["명령", "용도"], rows: [["ping", "ICMP 연결 확인"], ["traceroute/tracepath", "목적지까지 경로 추적"], ["ip addr", "IP 주소 확인"], ["ip route", "라우팅 테이블 확인"], ["ifconfig", "전통적 인터페이스 확인"], ["netstat", "전통적 연결/포트 확인"], ["ss", "소켓과 포트 확인"]] }],
    code: "ip addr\nip route\nping 8.8.8.8\ntracepath example.com\nss -tuln\nnetstat -tuln\nssh user@host\nsftp user@host",
    traps: ["SSH는 22번이다.", "Telnet은 23번이다.", "HTTP는 80번이다.", "HTTPS는 443번이다.", "DNS는 53번이다.", "POP3는 110번이다.", "IMAP은 143번이다.", "TCP는 연결지향이다.", "UDP는 비연결지향이다.", "ping은 ICMP 기반이다."],
    quizzes: [["SSH 기본 포트는?", ["21", "22", "23", "25"], 2, "SSH는 22번 포트를 사용합니다."], ["DNS 기본 포트는?", ["25", "53", "80", "110"], 2, "DNS는 53번입니다."], ["TCP의 특징은?", ["비연결지향", "연결지향", "암호화 전용", "주소 변환 전용"], 2, "TCP는 연결을 맺고 통신하는 연결지향 프로토콜입니다."], ["ping이 사용하는 기반 프로토콜은?", ["ICMP", "FTP", "SMTP", "POP3"], 1, "ping은 ICMP Echo 요청/응답을 사용합니다."], ["라우팅 테이블 확인 명령은?", ["ip addr", "ip route", "cut", "chmod"], 2, "ip route는 라우팅 정보를 확인합니다."]],
    memory: ["IP는 장치 주소.", "서브넷은 네트워크 범위.", "게이트웨이는 외부 네트워크 출구.", "DNS는 이름을 IP로 변환.", "TCP는 연결지향.", "UDP는 비연결지향.", "ping은 ICMP.", "SSH 22, Telnet 23.", "HTTP 80, HTTPS 443.", "DNS 53, POP3 110, IMAP 143."]
  },
  "xwindow": {
    title: "X 윈도우 및 활용",
    desc: "X Window System, X server/client, X.Org, DISPLAY, 윈도 매니저와 데스크톱 환경을 정리합니다.",
    intro: ["X 윈도우 파트의 핵심 함정은 X server와 X client의 방향입니다. 서버는 프로그램이 실행되는 곳이 아니라 화면·키보드·마우스가 있는 사용자 쪽입니다.", "GNOME, KDE, Xfce는 데스크톱 환경이고, window manager는 창의 배치와 테두리, 이동을 담당합니다.", "DISPLAY 환경변수는 X 출력 대상을 지정합니다. 원격 X 문제에서 자주 출제됩니다."],
    concepts: [["X Window System", "유닉스/리눅스 계열에서 그래픽 화면을 제공하는 네트워크 투명형 윈도 시스템입니다. GUI 자체라기보다 그래픽 입출력의 기반 구조로 이해합니다."], ["X server와 X client", "X server는 화면, 키보드, 마우스를 가진 쪽에서 입력과 출력을 관리합니다. X client는 실제로 실행되는 그래픽 응용 프로그램입니다."], ["X.Org", "X Window System의 대표 구현체입니다. 시험에서는 XFree86과 함께 역사적 구현체로 언급될 수 있습니다."], ["DISPLAY 환경변수", "그래픽 프로그램이 어느 X server에 화면을 출력할지 지정합니다. 예: DISPLAY=:0 또는 DISPLAY=host:0.0 형식입니다."], ["window manager", "창의 위치, 크기, 제목 표시줄, 포커스 같은 창 관리 기능을 담당합니다."], ["desktop environment", "윈도 매니저에 파일 관리자, 패널, 설정 도구, 기본 앱을 묶은 통합 데스크톱 환경입니다. GNOME, KDE, Xfce가 대표적입니다."], ["startx와 원격 X", "startx는 텍스트 환경에서 X 세션을 시작하는 명령으로 출제됩니다. 원격 X는 네트워크를 통해 다른 호스트의 GUI 프로그램 출력을 내 화면으로 보내는 개념입니다."]],
    tables: [{ title: "X 구성요소 비교", head: ["항목", "설명"], rows: [["X server", "사용자 화면·키보드·마우스가 있는 쪽"], ["X client", "실행되는 GUI 응용 프로그램"], ["X.Org", "X Window System 구현체"], ["DISPLAY", "X 출력 대상 지정 환경변수"], ["window manager", "창 배치와 조작 담당"], ["desktop environment", "GNOME, KDE, Xfce 같은 통합 GUI 환경"]] }],
    code: "echo $DISPLAY\nexport DISPLAY=:0\nstartx\nssh -X user@remote\nxclock",
    traps: ["X server는 사용자의 화면/키보드/마우스가 있는 쪽이다.", "X client는 응용 프로그램이다.", "GNOME/KDE/Xfce는 데스크톱 환경이다.", "window manager와 desktop environment는 다르다.", "DISPLAY는 X 출력 대상을 지정한다.", "startx는 X 세션 시작 명령이다."],
    quizzes: [["X server에 대한 설명으로 옳은 것은?", ["항상 원격 서버에서 실행되는 앱이다.", "화면·키보드·마우스가 있는 쪽이다.", "압축 프로그램이다.", "패키지 관리자다."], 2, "X server는 사용자 입출력 장치를 관리하는 쪽입니다."], ["X client는 무엇인가?", ["GUI 응용 프로그램", "부트로더", "파일시스템", "셸 변수만 저장하는 파일"], 1, "X client는 X server에 화면 출력을 요청하는 응용 프로그램입니다."], ["GNOME의 분류는?", ["윈도 매니저만", "데스크톱 환경", "커널", "부트로더"], 2, "GNOME은 데스크톱 환경입니다."], ["DISPLAY 환경변수의 역할은?", ["명령어 검색 경로", "X 출력 대상 지정", "파일 권한 계산", "패키지 목록 갱신"], 2, "DISPLAY는 GUI 출력이 향할 X server를 지정합니다."], ["텍스트 환경에서 X 세션을 시작하는 명령은?", ["startx", "chmod", "tar", "grep"], 1, "startx는 X 세션 시작 명령입니다."]],
    memory: ["X Window System은 그래픽 기반 구조.", "X server는 화면·키보드·마우스 쪽.", "X client는 GUI 응용 프로그램.", "X.Org는 대표 구현체.", "DISPLAY는 출력 대상.", "window manager는 창 관리.", "desktop environment는 통합 GUI 환경.", "GNOME은 데스크톱 환경.", "KDE도 데스크톱 환경.", "Xfce도 데스크톱 환경.", "startx는 X 시작."]
  }
};

function esc(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function inlineCode(text) {
  return esc(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderTable(table) {
  return `<section class="note-section"><h2>${esc(table.title)}</h2><div class="table-wrap command-table"><table><thead><tr>${table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineCode(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}

function renderQuiz(item, index) {
  return `<section class="quiz-block"><h3>예상문제 ${index + 1}</h3><p>${inlineCode(item[0])}</p><ol>${item[1].map((choice) => `<li>${inlineCode(choice)}</li>`).join("")}</ol><p class="answer-box"><strong>정답:</strong> ${item[2]}번</p><p><strong>해설:</strong> ${inlineCode(item[3])}</p></section>`;
}

function renderNotePage(key) {
  const data = NOTE_DATA[key];
  if (!data) return;
  document.title = `${data.title} - 리눅스마스터 2급 개념정리`;
  document.body.innerHTML = `
    <header class="site-header">
      <div class="wrap page-header">
        <nav class="breadcrumb">
          <a href="../index.html">메인으로 돌아가기</a>
          <a href="./index.html">개념정리 목록으로 돌아가기</a>
          <a href="${CBT_LINK}">관련 CBT 풀러 가기</a>
        </nav>
        <h1 class="site-title">${esc(data.title)}</h1>
        <p class="site-desc">${esc(data.desc)}</p>
      </div>
    </header>
    <main class="main wrap">
      <section class="note-section concept-box">
        <h2>시험 직전 도입 설명</h2>
        ${data.intro.map((p) => `<p>${inlineCode(p)}</p>`).join("")}
      </section>
      <section class="note-section">
        <h2>핵심 개념 설명</h2>
        <div class="command-notes">
          ${data.concepts.map((item) => `<article class="command-note"><h3>${inlineCode(item[0])}</h3><p>${inlineCode(item[1])}</p></article>`).join("")}
        </div>
      </section>
      ${data.tables.map(renderTable).join("")}
      <section class="note-section">
        <h2>명령어 예시와 출력 흐름</h2>
        <pre class="code-example"><code>${esc(data.code)}</code></pre>
      </section>
      <section class="note-section exam-point">
        <h2>시험 함정 포인트</h2>
        <ul class="trap-list">${data.traps.map((trap) => `<li>${inlineCode(trap)}</li>`).join("")}</ul>
      </section>
      <section class="note-section">
        <h2>예상문제</h2>
        ${data.quizzes.map(renderQuiz).join("")}
      </section>
      <section class="note-section memory-box">
        <h2>최종 암기 요약</h2>
        <pre><code>${esc(data.memory.join("\n"))}</code></pre>
      </section>
      <section class="note-section">
        <div class="btn-row">
          <a class="primary-btn" href="${CBT_LINK}">관련 CBT 풀러 가기</a>
          <a class="secondary-btn" href="./index.html">개념정리 목록으로 돌아가기</a>
          <a class="secondary-btn" href="../index.html">메인으로 돌아가기</a>
        </div>
      </section>
    </main>
    <footer class="site-footer"><div class="wrap">이 정리본은 리눅스마스터 2급 필기시험 대비용 요약이며, 실제 환경에서는 man page와 공식 문서를 함께 확인하는 것이 좋다.</div></footer>
  `;
  if (window.LinuxMasterAuth && typeof window.LinuxMasterAuth.renderAuthStatus === "function") {
    window.LinuxMasterAuth.renderAuthStatus();
  }
}
