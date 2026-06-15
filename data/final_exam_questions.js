(function () {
  var EXAM = "운영체제 기말고사";
  var SUBJECT = "운영체제 실습";
  var LM2_TYPE = "리눅스마스터 2급 2차 기출 연계";
  var CLASS_TYPE = "수업자료 기반";
  var LM2_SOURCE = "리눅스마스터 2급 2차 공개 기출/복원 자료 기반 재구성";
  var CLASS_SOURCE = "source/notion 및 source/lecture-pdf 기반";

  function make(prefix, sourceType, source, rows) {
    return rows.map(function (row, index) {
      return {
        id: prefix + "-" + String(index + 1).padStart(3, "0"),
        exam: EXAM,
        sourceType: sourceType,
        subject: SUBJECT,
        category: row[0],
        question: row[1],
        choices: row[2],
        answer: row[3],
        explanation: row[4],
        source: row[5] || source
      };
    });
  }

  var lm2Rows = [
    ["파일시스템", "하드 링크를 만들었을 때 원본 파일과 새 링크의 관계로 가장 알맞은 것은?", ["서로 다른 inode를 가지며 내용만 복사된다.", "같은 inode를 가리키며 링크 수가 증가한다.", "원본 파일의 경로 문자열만 저장한다.", "항상 다른 파일시스템에도 만들 수 있다."], 2, "하드 링크는 같은 inode를 공유한다. 그래서 어느 이름으로 수정해도 같은 파일 내용이 보인다."],
    ["파일시스템", "ext4의 저널링 기능을 설명한 것으로 가장 알맞은 것은?", ["파일을 항상 gzip으로 압축한다.", "장애 후 파일시스템 일관성 복구를 돕는다.", "사용자 암호 해시를 저장한다.", "네트워크 패킷을 암호화한다."], 2, "저널링은 메타데이터 변경 기록을 남겨 비정상 종료 후 복구를 빠르게 한다."],
    ["파일시스템", "/proc 파일시스템에 대한 설명으로 옳은 것은?", ["디스크 파티션을 반드시 차지하는 일반 파일시스템이다.", "커널과 프로세스 정보를 파일처럼 제공하는 가상 파일시스템이다.", "사용자 홈 디렉터리만 저장한다.", "압축 파일을 자동 해제한다."], 2, "/proc은 실제 디스크 저장 공간이 아니라 커널 상태와 프로세스 정보를 보여 주는 가상 파일시스템이다."],
    ["파일시스템", "특정 디렉터리의 실제 사용량을 요약해서 확인하는 명령으로 알맞은 것은?", ["df -h /home/user", "du -sh /home/user", "free -m /home/user", "lsblk -f /home/user"], 2, "df는 파일시스템 단위 여유 공간, du는 파일·디렉터리 사용량 확인에 적합하다."],
    ["파일시스템", "/etc/fstab의 역할로 가장 알맞은 것은?", ["사용자 암호 해시 저장", "부팅 시 자동 마운트 정보 정의", "프로세스 목록 저장", "패키지 설치 로그 전용 저장"], 2, "/etc/fstab에는 장치, 마운트 지점, 파일시스템 종류, 옵션 등이 기록된다."],

    ["파일 및 디렉터리 명령어", "숨김 파일까지 포함해 자세한 목록으로 확인하는 ls 명령은?", ["ls -a", "ls -l", "ls -al", "ls -R"], 3, "-a는 숨김 파일 포함, -l은 자세한 형식이다."],
    ["파일 및 디렉터리 명령어", "디렉터리와 내부 내용을 함께 복사할 때 필요한 cp 옵션은?", ["-r", "-n", "-u", "-x"], 1, "디렉터리 복사는 재귀 옵션 -r 또는 -R이 필요하다."],
    ["파일 및 디렉터리 명령어", "삭제 전 확인 질문을 표시하는 rm 옵션은?", ["-f", "-i", "-r", "-v"], 2, "rm -i는 삭제 전 대화형 확인을 요청한다."],
    ["파일 및 디렉터리 명령어", "/var 아래에서 이름이 .log로 끝나는 파일을 찾는 명령으로 알맞은 것은?", ["grep /var -name .log", "find /var -name '*.log'", "ls /var -grep .log", "tar /var .log"], 2, "find는 경로와 조건을 지정해 파일을 검색하며 이름 조건은 -name을 쓴다."],
    ["파일 및 디렉터리 명령어", "심볼릭 링크를 생성하는 명령은?", ["ln 원본 링크", "ln -s 원본 링크", "cp -s 원본 링크", "mv -s 원본 링크"], 2, "ln -s는 심볼릭 링크를 만든다. -s가 없으면 하드 링크로 해석된다."],

    ["사용자 및 그룹", "/etc/passwd에 대한 설명으로 옳은 것은?", ["암호 해시만 저장한다.", "사용자명, UID, GID, 홈 디렉터리, 로그인 셸 등 계정 정보를 담는다.", "현재 로그인한 사용자만 임시 저장한다.", "마운트 옵션만 저장한다."], 2, "현대 리눅스에서 암호 해시는 주로 /etc/shadow에 있고 /etc/passwd는 기본 계정 정보를 담는다."],
    ["사용자 및 그룹", "암호 해시와 암호 만료 정보가 주로 저장되는 파일은?", ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/shells"], 2, "/etc/shadow는 암호 해시와 aging 정보를 저장하는 보안 관련 파일이다."],
    ["사용자 및 그룹", "홈 디렉터리를 만들고 로그인 셸을 /bin/bash로 지정해 user1을 생성하는 명령은?", ["useradd -m -s /bin/bash user1", "useradd -G /bin/bash -m user1", "groupadd -m -s /bin/bash user1", "passwd -m -s /bin/bash user1"], 1, "useradd -m은 홈 디렉터리 생성, -s는 로그인 셸 지정 옵션이다."],
    ["사용자 및 그룹", "기존 사용자 user1을 project 보조 그룹에 추가하면서 기존 보조 그룹을 보존하는 명령은?", ["usermod -G project user1", "usermod -aG project user1", "groupmod -a user1 project", "passwd -G project user1"], 2, "usermod -aG는 기존 보조 그룹 목록에 append한다. -a 없이 -G만 쓰면 목록이 대체될 수 있다."],

    ["권한·소유권·특수권한", "chmod 755 file의 권한 표기로 알맞은 것은?", ["rw-r--r--", "rwxr-xr-x", "rwx------", "rw-rw-rw-"], 2, "7은 rwx, 5는 r-x이므로 755는 rwxr-xr-x이다."],
    ["권한·소유권·특수권한", "chmod 640 report.txt의 권한 의미로 알맞은 것은?", ["소유자 rw-, 그룹 r--, 기타 ---", "소유자 rwx, 그룹 r--, 기타 ---", "소유자 r--, 그룹 rw-, 기타 ---", "소유자 rw-, 그룹 rw-, 기타 r--"], 1, "6은 rw-, 4는 r--, 0은 ---이다."],
    ["권한·소유권·특수권한", "파일의 소유자를 alice로, 소유 그룹을 dev로 동시에 바꾸는 명령은?", ["chmod alice:dev file", "chgrp alice:dev file", "chown alice:dev file", "usermod alice:dev file"], 3, "chown user:group 파일 형식으로 소유자와 그룹을 함께 변경할 수 있다."],
    ["권한·소유권·특수권한", "umask가 022일 때 일반 파일과 디렉터리의 기본 권한으로 가장 알맞은 것은?", ["파일 755, 디렉터리 644", "파일 644, 디렉터리 755", "파일 666, 디렉터리 777", "파일 600, 디렉터리 700"], 2, "일반 파일은 666에서, 디렉터리는 777에서 umask를 제거한다고 이해하면 된다."],
    ["권한·소유권·특수권한", "setuid가 설정된 실행 파일의 특징으로 알맞은 것은?", ["실행 시 파일 소유자의 권한으로 동작할 수 있다.", "디렉터리 안의 파일이 자동으로 같은 그룹을 상속한다.", "아무 사용자나 파일을 삭제할 수 없게 제한한다.", "읽기 권한을 숫자 8로 표현한다."], 1, "setuid는 실행 파일이 파일 소유자의 유효 권한으로 동작하게 하는 특수 권한이다."],
    ["권한·소유권·특수권한", "/tmp 같은 공유 디렉터리에 sticky bit를 설정하는 주된 이유는?", ["새 파일이 항상 root 소유가 되게 하려고", "디렉터리 내 파일 삭제를 파일 소유자 등으로 제한하려고", "모든 파일을 자동 압축하려고", "실행 파일을 소유자 권한으로 실행하려고"], 2, "sticky bit가 있으면 보통 파일 소유자, 디렉터리 소유자, root만 삭제할 수 있다."],
    ["권한·소유권·특수권한", "디렉터리에 setgid를 설정했을 때 기대할 수 있는 효과는?", ["그 안에 생성되는 파일이 디렉터리의 그룹을 상속하기 쉽다.", "모든 사용자의 쓰기 권한이 자동 제거된다.", "디렉터리 자체가 압축 파일로 변환된다.", "일반 사용자가 root 암호 없이 로그인한다."], 1, "디렉터리 setgid는 협업 디렉터리에서 그룹 상속을 유지할 때 자주 사용한다."],

    ["프로세스 및 작업 관리", "전체 사용자 프로세스를 자세히 확인할 때 자주 쓰는 ps 명령 조합은?", ["ps aux", "ps -zip", "ps --mount", "ps -chmod"], 1, "ps aux는 전체 사용자 프로세스를 자세히 보여 주는 대표 조합이다."],
    ["프로세스 및 작업 관리", "CPU와 메모리 사용량 등 프로세스 상태를 실시간으로 확인하는 명령은?", ["top", "pwd", "chmod", "mkfs"], 1, "top은 프로세스 상태를 실시간으로 갱신해 보여 준다."],
    ["프로세스 및 작업 관리", "SIGTERM과 SIGKILL의 차이로 알맞은 것은?", ["SIGTERM은 강제 종료, SIGKILL은 종료 요청이다.", "SIGTERM은 종료 요청, SIGKILL은 잡을 수 없는 강제 종료이다.", "둘 다 파일 권한 변경 신호이다.", "둘 다 백그라운드 작업 목록 출력 명령이다."], 2, "SIGTERM은 정상 종료 요청이고 SIGKILL은 프로세스가 처리할 수 없는 강제 종료 신호이다."],
    ["프로세스 및 작업 관리", "nice 값에 대한 설명으로 옳은 것은?", ["값이 낮을수록 일반적으로 우선순위가 높다.", "값이 높을수록 항상 root 권한을 얻는다.", "값은 파일 권한의 8진수 표현이다.", "값은 네트워크 포트 번호이다."], 1, "nice 값이 낮을수록 CPU 스케줄링에서 더 높은 우선순위 방향으로 해석된다."],
    ["프로세스 및 작업 관리", "현재 셸에서 백그라운드 작업 목록을 확인하는 명령은?", ["jobs", "fg", "bg", "nohup"], 1, "jobs는 현재 셸이 관리하는 작업 목록을 보여 준다."],
    ["프로세스 및 작업 관리", "터미널을 닫아도 장시간 작업이 계속되도록 실행할 때 알맞은 형태는?", ["nohup command &", "chmod command &", "fsck command &", "umask command &"], 1, "nohup은 SIGHUP 영향을 피하게 하고 &는 백그라운드 실행을 의미한다."],

    ["셸·환경변수·스크립트", "셸 변수를 자식 프로세스에도 전달되는 환경변수로 만들 때 사용하는 명령은?", ["alias", "export", "history", "umask"], 2, "export는 셸 변수를 환경변수로 내보내 자식 프로세스가 참조할 수 있게 한다."],
    ["셸·환경변수·스크립트", "PATH 환경변수의 역할로 알맞은 것은?", ["암호 만료일 목록 저장", "명령어 실행 파일을 찾을 디렉터리 목록 지정", "디스크 파티션 번호 지정", "프로세스 종료 신호 저장"], 2, "PATH는 명령 이름만 입력했을 때 셸이 실행 파일을 검색할 경로 목록이다."],
    ["셸·환경변수·스크립트", "source script.sh와 bash script.sh의 차이로 알맞은 것은?", ["source는 현재 셸에서 실행하고 bash script.sh는 새 bash 프로세스에서 실행한다.", "source는 파일을 삭제하고 bash는 파일을 복사한다.", "source는 root만 실행 가능하고 bash는 일반 사용자만 가능하다.", "둘은 항상 완전히 같은 환경에서 실행된다."], 1, "source는 현재 셸 환경에서 실행되므로 변수 변경 등이 현재 셸에 남을 수 있다."],
    ["셸·환경변수·스크립트", "표준에러를 표준출력과 같은 대상으로 합쳐 저장할 때 자주 쓰는 표현은?", ["> file 2>&1", "| file 2<1", "< file 1>2", "& file 2|1"], 1, "> file은 표준출력을 파일로 보내고 2>&1은 표준에러를 현재 표준출력 대상으로 합친다."],
    ["셸·환경변수·스크립트", "파이프(|)의 기능으로 가장 알맞은 것은?", ["앞 명령의 표준출력을 뒤 명령의 표준입력으로 전달한다.", "파일 권한을 rwx로 바꾼다.", "부팅 타겟을 변경한다.", "패키지를 저장소에서 삭제한다."], 1, "파이프는 명령들을 연결해 앞 명령의 출력이 뒤 명령의 입력으로 사용되게 한다."],

    ["vi 편집기", "vi에서 입력 모드로 전환하는 키가 아닌 것은?", ["i", "a", "o", ":w"], 4, "i, a, o는 입력 모드 진입과 관련된다. :w는 저장 명령이다."],
    ["vi 편집기", "vi에서 저장 후 종료와 저장하지 않고 강제 종료 명령의 조합으로 알맞은 것은?", [":wq, :q!", ":q!, :wq", "dd, yy", "/word, n"], 1, ":wq는 저장 후 종료, :q!는 변경 내용을 버리고 강제 종료이다."],
    ["vi 편집기", "vi 명령 모드에서 현재 줄 삭제, 현재 줄 복사, 붙여넣기 조합은?", ["dd, yy, p", "yy, dd, u", "p, dd, yy", "i, a, o"], 1, "dd는 현재 줄 삭제, yy는 현재 줄 복사, p는 붙여넣기이다."],
    ["vi 편집기", "vi에서 /linux로 검색한 뒤 같은 방향의 다음 결과로 이동하는 키는?", ["n", "N", "u", "p"], 1, "n은 현재 검색 방향의 다음 결과, N은 반대 방향 결과로 이동한다."],
    ["vi 편집기", "파일 전체에서 old를 new로 모두 치환하는 vi ex 명령은?", [":s/old/new", ":%s/old/new/g", ":/old/new/all", ":replace old new"], 2, ":%s/old/new/g는 전체 범위에서 각 줄의 모든 old를 new로 치환한다."],

    ["패키지 관리", "Debian/Ubuntu 계열에서 apt update의 주된 기능은?", ["설치된 모든 패키지를 즉시 삭제한다.", "저장소의 패키지 목록 정보를 갱신한다.", "커널 이미지를 직접 컴파일한다.", "사용자 암호를 변경한다."], 2, "apt update는 저장소 인덱스를 갱신한다. 실제 업그레이드는 apt upgrade 등이 담당한다."],
    ["패키지 관리", "apt remove와 apt purge의 차이로 알맞은 것은?", ["remove는 설정 파일까지 삭제하고 purge는 패키지만 제거한다.", "purge는 패키지와 설정 파일까지 제거하는 데 사용된다.", "둘 다 저장소 목록만 갱신한다.", "둘 다 RPM 전용 명령이다."], 2, "purge는 패키지뿐 아니라 설정 파일 제거까지 의도할 때 사용한다."],
    ["패키지 관리", "로컬 .deb 파일을 직접 설치하는 낮은 수준의 Debian 패키지 명령은?", ["rpm -i package.deb", "dpkg -i package.deb", "yum install package.deb", "tar -i package.deb"], 2, "dpkg -i는 로컬 .deb 패키지를 설치한다. 의존성 처리는 apt가 더 편하다."],
    ["패키지 관리", "RPM 계열에서 설치된 모든 패키지 목록을 조회하는 명령은?", ["rpm -qa", "rpm -e", "rpm -Uvh", "rpm --nodeps"], 1, "rpm -q는 query, -a는 all을 의미한다."],
    ["패키지 관리", "RPM 패키지를 제거할 때 사용하는 기본 옵션은?", ["-i", "-U", "-e", "-q"], 3, "rpm -e는 erase, 즉 패키지 제거 옵션이다."],
    ["패키지 관리", "Red Hat 계열에서 저장소 기반 의존성 처리를 포함해 패키지를 설치할 때 쓰는 도구는?", ["dnf", "dpkg", "apt-get", "pacman"], 1, "RHEL/Rocky/Fedora 계열은 yum 또는 dnf를 저장소 기반 패키지 관리 도구로 사용한다."],
    ["패키지 관리", "소스 코드를 받아 일반적인 순서로 빌드·설치하는 흐름은?", ["make install → configure → make", "configure → make → make install", "make → make install → configure", "install → make → configure"], 2, "일반적인 소스 설치는 configure, make, make install 순서이다."],

    ["압축·아카이브·백업", "여러 파일을 tar 아카이브로 새로 묶는 기본 옵션 조합은?", ["tar -cvf backup.tar dir", "tar -xvf backup.tar dir", "tar -tvf backup.tar dir", "tar -rvz backup.tar dir"], 1, "tar에서 c는 create, v는 verbose, f는 파일명 지정이다."],
    ["압축·아카이브·백업", "tar 아카이브를 해제하는 기본 옵션 조합은?", ["tar -cvf file.tar", "tar -xvf file.tar", "tar -tvf file.tar", "tar -zcf file.tar"], 2, "tar에서 x는 extract를 의미한다."],
    ["압축·아카이브·백업", "gzip으로 압축된 tar 파일을 생성하는 명령은?", ["tar -czf backup.tar.gz dir", "tar -xzf backup.tar.gz dir", "gzip -x backup.tar.gz dir", "zip -czf backup.tar.gz dir"], 1, "z는 gzip, c는 생성이다."],
    ["압축·아카이브·백업", "bzip2로 압축된 tar 파일의 목록만 확인할 때 알맞은 옵션 조합은?", ["tar -jxvf file.tar.bz2", "tar -jtvf file.tar.bz2", "tar -czvf file.tar.bz2", "tar -Jxvf file.tar.bz2"], 2, "j는 bzip2, t는 목록 확인이다. x는 해제이다."],
    ["압축·아카이브·백업", "xz로 압축된 tar 파일을 해제할 때 사용하는 tar 옵션은?", ["-z", "-j", "-J", "-S"], 3, "tar에서 -J는 xz 압축 처리를 의미한다."],

    ["디스크·마운트", "블록 장치와 파티션 구조를 트리 형태로 확인하는 명령은?", ["lsblk", "lsmod", "lsof", "lsattr"], 1, "lsblk는 block device 목록과 계층 구조를 보여 준다."],
    ["디스크·마운트", "디스크 파티션을 생성·삭제·확인하는 전통적인 대화형 명령은?", ["fdisk", "fsck", "free", "find"], 1, "fdisk는 디스크 파티션 테이블을 다루는 대표 명령이다."],
    ["디스크·마운트", "/dev/sdb1을 /mnt/data에 연결해 사용하려고 한다. 알맞은 명령은?", ["mkfs /dev/sdb1 /mnt/data", "mount /dev/sdb1 /mnt/data", "umount /dev/sdb1 /mnt/data", "swapon /dev/sdb1 /mnt/data"], 2, "mount 장치 마운트지점 형식으로 파일시스템을 연결한다."],
    ["디스크·마운트", "/mnt/data에 마운트된 파일시스템을 해제하는 명령은?", ["umount /mnt/data", "unmount /mnt/data", "mount -d /mnt/data", "fsck -d /mnt/data"], 1, "리눅스 명령은 unmount가 아니라 umount이다."],
    ["디스크·마운트", "새 파티션 /dev/sdb1을 ext4 파일시스템으로 초기화하는 명령은?", ["mkfs.ext4 /dev/sdb1", "mount.ext4 /dev/sdb1", "fsck.ext4 /dev/sdb1", "fdisk.ext4 /dev/sdb1"], 1, "mkfs.ext4는 ext4 파일시스템을 생성한다."],

    ["네트워크 기초", "현대 리눅스에서 네트워크 인터페이스의 IP 주소를 확인하는 명령은?", ["ip addr", "chmod addr", "tar addr", "passwd addr"], 1, "ip addr 또는 ip a는 인터페이스 주소 정보를 확인한다."],
    ["네트워크 기초", "대상 호스트와 기본적인 IP 연결 가능성을 확인할 때 사용하는 명령은?", ["ping", "grep", "useradd", "umask"], 1, "ping은 ICMP Echo를 이용해 통신 가능성과 응답 시간을 확인한다."],
    ["네트워크 기초", "목적지까지 패킷이 거치는 라우터 경로를 추적하는 명령은?", ["traceroute", "ifdown", "passwd", "chgrp"], 1, "traceroute는 목적지까지의 홉 경로를 추적한다."],
    ["네트워크 기초", "도메인 이름을 IP 주소로 변환하는 체계는?", ["DNS", "RAID", "LVM", "GRUB"], 1, "DNS는 도메인 이름과 IP 주소를 변환·질의하는 시스템이다."],

    ["네트워크 서비스", "SSH와 Telnet을 비교한 설명으로 알맞은 것은?", ["SSH는 평문 전송이고 Telnet은 암호화 전송이다.", "SSH는 암호화된 원격 접속, Telnet은 평문 기반 원격 접속이다.", "둘 다 파일 압축 전용 도구이다.", "둘 다 디스크 파티션 생성 명령이다."], 2, "SSH는 암호화·인증을 제공하고 Telnet은 평문 전송이라 보안상 취약하다."],
    ["네트워크 서비스", "FTP의 제어 연결에 기본적으로 사용되는 포트 번호는?", ["20", "21", "22", "80"], 2, "FTP 제어 연결은 TCP 21번 포트를 사용한다."],
    ["네트워크 서비스", "HTTP와 HTTPS의 기본 포트 조합으로 알맞은 것은?", ["80, 443", "21, 22", "25, 110", "53, 67"], 1, "HTTP는 80번, HTTPS는 443번 포트가 기본이다."],
    ["네트워크 서비스", "Windows 시스템과 파일·프린터 공유를 연동할 때 주로 사용하는 서비스는?", ["Samba", "GRUB", "LVM", "Cron"], 1, "Samba는 SMB/CIFS 기반으로 Windows와 파일·프린터 공유를 연동한다."],

    ["부팅 과정", "일반적인 리눅스 부팅 흐름으로 가장 알맞은 것은?", ["셸 → 로그인 → 커널 → 부트로더", "BIOS/UEFI → 부트로더 → 커널 → systemd", "패키지 관리자 → DNS → 커널 → 셸", "마운트 → chmod → GRUB → BIOS"], 2, "펌웨어가 부트로더를 실행하고, 부트로더가 커널을 적재하며, 이후 systemd가 사용자 공간 초기화를 담당한다."],
    ["부팅 과정", "GRUB의 역할로 가장 알맞은 것은?", ["사용자 암호를 해시로 저장한다.", "운영체제와 커널을 선택·적재하는 부트로더 역할을 한다.", "패키지 의존성을 자동 해결한다.", "파일 내용을 줄 번호와 함께 검색한다."], 2, "GRUB은 대표적인 리눅스 부트로더이다."],
    ["부팅 과정", "리눅스 커널 이미지가 일반적으로 위치하는 디렉터리는?", ["/boot", "/home", "/tmp", "/var/log"], 1, "/boot에는 vmlinuz 형태의 커널 이미지와 부트로더 관련 파일이 위치한다."],

    ["systemd/runlevel", "현재 systemd 기본 부팅 타겟을 확인하는 명령은?", ["systemctl get-default", "systemctl set-default", "systemctl list-user", "systemctl chmod"], 1, "systemctl get-default는 기본 target을 출력한다."],
    ["systemd/runlevel", "그래픽 로그인 환경으로 부팅되는 systemd target은?", ["rescue.target", "multi-user.target", "graphical.target", "poweroff.target"], 3, "graphical.target은 그래픽 환경을 포함한 다중 사용자 상태이다."],
    ["systemd/runlevel", "전통적인 runlevel 3과 5의 일반적 대응으로 알맞은 것은?", ["3은 종료, 5는 단일 사용자", "3은 텍스트 기반 다중 사용자, 5는 그래픽 다중 사용자", "3은 재부팅, 5는 종료", "3은 파일시스템 점검, 5는 패키지 설치"], 2, "전통적으로 3은 텍스트 기반 다중 사용자, 5는 그래픽 로그인 포함 모드로 설명된다."],

    ["서비스 관리", "서비스를 즉시 시작하는 것과 부팅 시 자동 시작되게 하는 systemctl 명령 조합은?", ["start, enable", "enable, status", "stop, mask", "reload, disable"], 1, "start는 즉시 시작, enable은 부팅 시 자동 시작 등록이다."],
    ["서비스 관리", "특정 systemd 서비스 단위의 로그를 확인할 때 사용하는 명령은?", ["journalctl -u 서비스명", "grepctl -u 서비스명", "logctl -chmod 서비스명", "tarctl -u 서비스명"], 1, "journalctl -u unit은 해당 systemd unit 관련 로그를 조회한다."],
    ["파일시스템", "파일 이름과 inode의 관계로 가장 알맞은 것은?", ["inode가 파일 이름을 직접 저장한다.", "디렉터리 엔트리가 파일 이름과 inode 번호를 연결한다.", "파일 이름은 항상 /etc/passwd에 저장된다.", "inode는 네트워크 포트 번호만 저장한다."], 2, "파일 이름은 디렉터리 엔트리에 있고 inode는 파일 메타데이터와 데이터 블록 위치 정보를 가진다."],
    ["파일 및 디렉터리 명령어", "파일 내용에서 특정 문자열이 없는 줄만 출력하는 grep 옵션은?", ["-n", "-v", "-c", "-l"], 2, "grep -v는 패턴과 일치하지 않는 줄을 출력한다."],
    ["권한·소유권·특수권한", "chmod 4755 program의 앞자리 4가 의미하는 특수 권한은?", ["setuid", "setgid", "sticky bit", "umask"], 1, "숫자 권한에서 앞자리 4는 setuid, 2는 setgid, 1은 sticky bit를 의미한다."],
    ["프로세스 및 작업 관리", "Ctrl+Z로 일시정지한 작업을 백그라운드에서 계속 실행하는 명령은?", ["fg", "bg", "jobs -k", "kill -STOP"], 2, "Ctrl+Z는 작업을 중지시키고 bg는 중지된 작업을 백그라운드에서 재개한다."],
    ["셸·환경변수·스크립트", "명령 실행 이력을 확인하는 bash 내장 명령은?", ["history", "export", "source", "readlink"], 1, "history는 현재 셸의 명령 실행 이력을 보여 준다."],
    ["vi 편집기", "vi 명령 모드에서 커서 위치의 한 문자를 삭제하는 키는?", ["x", "dd", "yy", ":q"], 1, "x는 커서 위치의 한 문자를 삭제한다. dd는 줄 삭제이다."],
    ["패키지 관리", "yum 또는 dnf가 rpm보다 의존성 처리에서 편한 이유로 알맞은 것은?", ["저장소 정보를 이용해 필요한 의존 패키지를 함께 처리할 수 있다.", "항상 소스 컴파일만 수행한다.", "사용자 계정을 자동 삭제한다.", "파일시스템을 자동 포맷한다."], 1, "rpm은 개별 패키지 중심이고 yum/dnf는 저장소 기반으로 의존성 처리를 지원한다."],
    ["압축·아카이브·백업", "zip 파일을 해제하는 명령으로 알맞은 것은?", ["unzip file.zip", "tar -Jxvf file.zip", "gzip -d file.zip", "rpm -e file.zip"], 1, "zip 형식은 unzip 명령으로 해제한다."],
    ["디스크·마운트", "현재 마운트된 파일시스템과 사용량을 확인하는 명령으로 알맞은 것은?", ["df -h", "du -sh", "free -h", "ps -ef"], 1, "df -h는 마운트된 파일시스템의 전체 용량과 사용량을 보기 쉽게 출력한다."],
    ["네트워크 기초", "DNS 서버 질의 확인에 사용하는 명령으로 알맞은 것은?", ["dig", "chmod", "lvcreate", "umount"], 1, "dig는 DNS 질의를 수행해 이름 해석 결과를 확인하는 도구이다."],
    ["네트워크 서비스", "메일 전송 프로토콜 SMTP의 기본 포트로 가장 많이 묻는 것은?", ["25", "53", "110", "143"], 1, "SMTP는 기본적으로 TCP 25번 포트를 사용한다."],
    ["부팅 과정", "MBR의 전통적 설명으로 알맞은 것은?", ["디스크 첫 부분에 위치하며 부트로더 코드와 파티션 정보를 포함할 수 있다.", "사용자 홈 디렉터리 백업 파일이다.", "네트워크 DNS 캐시 파일이다.", "패키지 저장소 서명 키이다."], 1, "전통적인 BIOS 부팅에서 MBR은 부팅 초기 코드와 파티션 테이블 정보를 담는 영역으로 설명된다."],
    ["systemd/runlevel", "현재 실행 상태를 다른 target으로 즉시 전환할 때 사용하는 systemctl 하위 명령은?", ["isolate", "enable", "cat", "mask --list"], 1, "systemctl isolate target은 현재 시스템 상태를 지정한 target으로 전환한다."],
    ["서비스 관리", "서비스를 즉시 중지하고 부팅 자동 시작도 해제하려면 어떤 조합이 알맞은가?", ["stop, disable", "start, enable", "status, reload", "restart, get-default"], 1, "stop은 현재 서비스를 중지하고 disable은 부팅 시 자동 시작 등록을 해제한다."]
  ];

  var classRows = [
    ["디스크·마운트", "Hyper-V에서 Ubuntu 가상 머신에 새 가상 하드디스크를 추가한 뒤 리눅스 내부에서 장치 인식을 확인하는 명령은?", ["lsblk", "passwd", "history", "alias"], 1, "노션 9주차 흐름에서는 추가 디스크 생성 후 Ubuntu 내부에서 lsblk로 블록 장치를 확인한다.", "source/notion/노션_9주차.pdf 기반"],
    ["디스크·마운트", "새 디스크를 LVM 실습에 사용하기 전 파티션을 나누는 단계에서 사용하는 명령은?", ["fdisk", "free", "finger", "fg"], 1, "노션 9주차와 7장 수업 PDF 모두 새 디스크 파티션 생성 과정에서 fdisk 계열 작업을 다룬다.", "source/notion/노션_9주차.pdf 및 source/lecture-pdf/7장 파일시스템 기반"],
    ["파일시스템", "LVM 구성 순서로 수업 실습 흐름에 가장 가까운 것은?", ["LV → VG → PV", "VG → PV → LV", "PV → VG → LV", "mkfs → PV → fdisk"], 3, "물리 볼륨(PV)을 만들고, 이를 볼륨 그룹(VG)으로 묶은 뒤 논리 볼륨(LV)을 생성한다.", "source/notion/노션_9주차.pdf 및 source/lecture-pdf/7장 파일시스템 기반"],
    ["파일시스템", "LVM에서 /dev/sdb1을 물리 볼륨으로 초기화하는 명령으로 알맞은 것은?", ["pvcreate /dev/sdb1", "vgcreate /dev/sdb1", "lvcreate /dev/sdb1", "mkfs.pv /dev/sdb1"], 1, "pvcreate는 파티션이나 디스크를 LVM 물리 볼륨으로 초기화한다.", "source/notion/노션_9주차.pdf 기반"],
    ["파일시스템", "여러 PV를 묶어 myvg라는 볼륨 그룹을 만드는 명령 형태로 알맞은 것은?", ["vgcreate myvg /dev/sdb1 /dev/sdc1", "pvcreate myvg /dev/sdb1 /dev/sdc1", "lvcreate myvg /dev/sdb1 /dev/sdc1", "mkfs.ext4 myvg /dev/sdb1"], 1, "vgcreate 볼륨그룹명 PV목록 형식으로 여러 물리 볼륨을 하나의 볼륨 그룹으로 묶는다.", "source/notion/노션_9주차.pdf 기반"],
    ["파일시스템", "myvg 안에 이름이 lvdata1이고 크기가 4G인 논리 볼륨을 만드는 명령은?", ["lvcreate -n lvdata1 -L 4G myvg", "vgcreate -n lvdata1 -L 4G myvg", "pvcreate -n lvdata1 -L 4G myvg", "fdisk -n lvdata1 -L 4G myvg"], 1, "lvcreate에서 -n은 논리 볼륨 이름, -L은 크기 지정에 사용한다.", "source/notion/노션_9주차.pdf 기반"],
    ["파일시스템", "생성한 논리 볼륨을 일반 파일 저장 공간으로 쓰기 전에 수행해야 하는 작업은?", ["파일시스템 생성", "사용자 암호 삭제", "SSH 포트 변경", "DNS 캐시 비우기"], 1, "논리 볼륨도 사용하려면 mkfs.ext4 등으로 파일시스템을 만든 뒤 마운트해야 한다.", "source/notion/노션_9주차.pdf 및 source/lecture-pdf/7장 파일시스템 기반"],
    ["디스크·마운트", "논리 볼륨 /dev/myvg/lvdata1을 /mnt/lvdata1에서 사용하도록 연결하는 명령은?", ["mount /dev/myvg/lvdata1 /mnt/lvdata1", "mkfs /dev/myvg/lvdata1 /mnt/lvdata1", "fdisk /dev/myvg/lvdata1 /mnt/lvdata1", "swapon /dev/myvg/lvdata1 /mnt/lvdata1"], 1, "mount는 파일시스템을 지정한 디렉터리에 연결한다.", "source/notion/노션_9주차.pdf 기반"],

    ["패키지 관리", "노션 11주차의 APT 정리에서 apt update의 의미로 맞는 것은?", ["저장소 패키지 목록 갱신", "모든 설정 파일 삭제", "사용자 계정 생성", "부트로더 설치"], 1, "apt update는 저장소 인덱스를 최신 상태로 갱신한다.", "source/notion/노션_11주차.pdf 기반"],
    ["패키지 관리", "apt upgrade와 비교해 apt full-upgrade의 특징으로 알맞은 것은?", ["필요하면 의존성 해결을 위해 패키지 제거·설치까지 동반할 수 있다.", "항상 패키지 목록만 출력한다.", "항상 네트워크 설정만 초기화한다.", "dpkg 데이터베이스를 삭제한다."], 1, "full-upgrade는 의존성 변화 처리를 위해 패키지 제거까지 포함할 수 있다.", "source/notion/노션_11주차.pdf 기반"],
    ["패키지 관리", "Ubuntu 기준 MySQL 서버를 설치할 때 가장 자연스러운 APT 명령 형태는?", ["sudo apt install mysql-server", "sudo rpm -e mysql-server", "sudo tar -xvf mysql-server", "sudo useradd mysql-server"], 1, "노션 11주차 MySQL 설치 흐름은 Ubuntu 패키지 관리자인 apt install을 사용한다.", "source/notion/노션_11주차.pdf 기반"],
    ["서비스 관리", "MySQL 설치 후 서비스가 실행 중인지 확인하는 명령 형태는?", ["systemctl status mysql", "systemctl chmod mysql", "systemctl passwd mysql", "systemctl fdisk mysql"], 1, "systemctl status는 systemd 서비스의 현재 상태를 확인한다.", "source/notion/노션_11주차.pdf 기반"],
    ["패키지 관리", "외부 저장소를 추가할 때 GPG 키를 확인하는 이유는?", ["패키지나 저장소 메타데이터의 신뢰성과 무결성을 검증하기 위해서", "디스크 파티션 크기를 자동 계산하기 위해서", "사용자 홈 디렉터리를 만들기 위해서", "프로세스 우선순위를 낮추기 위해서"], 1, "GPG 키는 저장소와 패키지 서명의 신뢰성을 검증하는 데 사용된다.", "source/notion/노션_11주차.pdf 기반"],

    ["사용자 및 그룹", "노션 12/14주차에서 adduser와 useradd를 비교한 설명으로 알맞은 것은?", ["adduser는 비교적 고수준·대화형, useradd는 옵션 지정 중심의 저수준 명령이다.", "adduser는 그룹 삭제, useradd는 파일 삭제 명령이다.", "adduser는 Red Hat에서만, useradd는 Windows에서만 사용한다.", "둘 다 네트워크 포트 확인 전용 명령이다."], 1, "수업 노션은 adduser를 사용자 친화적인 고수준 명령, useradd를 옵션을 직접 지정하는 저수준 명령으로 정리한다.", "source/notion/노션_12주차.pdf 및 노션_14주차.pdf 기반"],
    ["사용자 및 그룹", "useradd에서 홈 디렉터리를 자동 생성하도록 하는 옵션은?", ["-m", "-s", "-G", "-L"], 1, "useradd -m은 사용자의 홈 디렉터리를 생성한다.", "source/notion/노션_12주차.pdf 및 source/lecture-pdf/10장 사용자 관리 기반"],
    ["사용자 및 그룹", "useradd에서 로그인 셸을 지정하는 옵션은?", ["-m", "-s", "-u", "-c"], 2, "-s 옵션은 사용자의 로그인 셸 경로를 지정한다.", "source/notion/노션_12주차.pdf 및 source/lecture-pdf/10장 사용자 관리 기반"],
    ["사용자 및 그룹", "기존 사용자 newuser를 project 그룹에 추가하되 기존 보조 그룹을 유지하는 명령은?", ["usermod -aG project newuser", "usermod -G project newuser만 항상 안전하다", "groupadd -aG project newuser", "passwd -aG project newuser"], 1, "-aG 조합은 보조 그룹 목록에 추가한다. -a 없이 -G만 쓰면 기존 보조 그룹이 대체될 수 있다.", "source/notion/노션_12주차.pdf 및 source/lecture-pdf/10장 사용자 관리 기반"],
    ["사용자 및 그룹", "/etc/passwd의 한 행에서 확인하기 어려운 정보는?", ["로그인 ID", "UID와 GID", "홈 디렉터리와 로그인 셸", "실제 암호 해시 전체"], 4, "현대 리눅스에서는 실제 암호 해시가 보통 /etc/shadow에 저장된다.", "source/lecture-pdf/10장 사용자 관리 기반"],

    ["네트워크 서비스", "노션 16주차의 Telnet과 SSH 비교에서 보안상 더 안전한 원격 접속 방식은?", ["SSH", "Telnet", "rlogin 평문 접속", "암호 없는 FTP"], 1, "SSH는 암호화·인증·무결성을 제공하므로 Telnet보다 안전하다.", "source/notion/노션_16주차.pdf 기반"],
    ["네트워크 서비스", "FTP 클라이언트에서 로컬 파일을 서버로 업로드할 때 쓰는 명령은?", ["put", "get", "pwd", "lcd"], 1, "FTP에서 put은 업로드, get은 다운로드에 사용한다.", "source/notion/노션_16주차.pdf 기반"],
    ["네트워크 서비스", "FTP 클라이언트에서 서버 파일을 로컬로 내려받는 명령은?", ["get", "put", "send", "push"], 1, "FTP에서 get은 서버에서 로컬로 파일을 가져오는 명령이다.", "source/notion/노션_16주차.pdf 기반"],
    ["서비스 관리", "MariaDB 설치 후 보안 설정에서 root 암호 설정이나 기본 보안 정리에 사용하는 대표 절차는?", ["mysql_secure_installation", "mysql_fdisk_installation", "mysql_umount_installation", "mysql_chmod_installation"], 1, "MariaDB/MySQL 계열에서는 설치 후 mysql_secure_installation으로 기본 보안 항목을 정리한다.", "source/notion/노션_16주차.pdf 기반"],

    ["네트워크 기초", "수업 PDF에서 프로토콜의 의미로 가장 알맞은 것은?", ["컴퓨터 사이에서 데이터를 주고받는 규칙", "사용자 암호를 저장하는 파일", "디스크 파티션을 합치는 기술", "파일 권한을 숫자로 바꾸는 방식"], 1, "네트워크 프로토콜은 시스템 사이 데이터 교환 방식을 정한 통신 규약이다.", "source/lecture-pdf/14-111장 네트워크 설정 기반"],
    ["네트워크 기초", "MAC 주소와 IP 주소의 차이로 알맞은 것은?", ["MAC은 논리 주소, IP는 물리 주소이다.", "MAC은 네트워크 인터페이스의 물리 식별에 가깝고 IP는 네트워크 계층의 논리 주소이다.", "둘 다 항상 chmod로 바꾼다.", "둘 다 파일시스템 마운트 지점이다."], 2, "MAC 주소는 인터페이스 식별에 쓰이고 IP 주소는 네트워크 계층 논리 주소이다.", "source/lecture-pdf/14-111장 네트워크 설정 기반"],
    ["네트워크 기초", "수업 PDF의 네트워크 진단 명령 중 통신 가능 여부를 빠르게 확인하는 명령은?", ["ping", "passwd", "pvcreate", "lvcreate"], 1, "ping은 ICMP Echo를 사용해 목적지와 통신 가능한지 확인한다.", "source/lecture-pdf/14-111장 네트워크 설정 기반"],
    ["네트워크 기초", "열린 포트와 네트워크 연결 상태를 확인하는 도구 조합으로 알맞은 것은?", ["netstat 또는 ss", "chmod 또는 chown", "pvcreate 또는 vgcreate", "tar 또는 gzip만"], 1, "netstat과 ss는 소켓, 연결, 리스닝 포트 등을 확인할 때 사용한다.", "source/lecture-pdf/14-111장 네트워크 설정 기반"],

    ["부팅 과정", "수업 PDF의 부팅 과정에서 BIOS/UEFI 다음 단계로 커널을 메모리에 올리는 역할을 하는 것은?", ["부트로더", "패키지 관리자", "일반 사용자 셸", "FTP 클라이언트"], 1, "부트로더는 운영체제 선택 메뉴를 제공하고 리눅스 커널을 메모리에 적재한다.", "source/lecture-pdf/8장 부팅과 종료 기반"],
    ["부팅 과정", "리눅스의 대표적인 부트로더로 수업 PDF에서 언급되는 조합은?", ["GRUB와 LILO", "APT와 DPKG", "SSH와 FTP", "PV와 VG"], 1, "8장 수업 PDF는 리눅스 부트로더 예로 GRUB와 LILO를 다룬다.", "source/lecture-pdf/8장 부팅과 종료 기반"],
    ["systemd/runlevel", "텍스트 기반 다중 사용자 환경과 가장 가까운 systemd target은?", ["multi-user.target", "graphical.target", "poweroff.target", "hibernate.target"], 1, "multi-user.target은 GUI를 제외한 다중 사용자 서버 환경에 가깝다.", "source/lecture-pdf/8장 부팅과 종료 기반"],
    ["패키지 관리", "Ubuntu 패키지가 바이너리 파일 중심으로 제공될 때의 장점으로 수업 PDF 설명에 부합하는 것은?", ["일반 사용자가 매번 소스 컴파일을 하지 않아도 설치할 수 있다.", "항상 파일 권한이 777로 고정된다.", "부팅 과정이 GRUB 없이 진행된다.", "DNS 설정이 자동 삭제된다."], 1, "9장 패키지 관리 PDF는 패키지가 바이너리 형태로 제공되어 컴파일 부담 없이 설치할 수 있음을 다룬다.", "source/lecture-pdf/9장 패키지 관리 기반"],
    ["디스크·마운트", "수업 PDF의 마운트 단원과 관련해 재부팅 후에도 자동 마운트되도록 설정할 때 확인해야 하는 파일은?", ["/etc/fstab", "/etc/shadow", "/etc/group", "/etc/shells"], 1, "/etc/fstab은 부팅 시 자동 마운트할 파일시스템 정보를 기록한다.", "source/lecture-pdf/7장 파일시스템 기반"],
    ["압축·아카이브·백업", "노션 16주차 백업 흐름과 연결해 gzip tar 백업을 만들 때 알맞은 명령 형태는?", ["tar -czf backup.tar.gz 대상", "tar -xzf backup.tar.gz 대상", "gzip -list backup.tar.gz 대상", "zip -mount backup.tar.gz 대상"], 1, "tar -czf는 gzip 압축 tar 아카이브를 생성한다. c와 x를 구분해야 한다.", "source/notion/노션_16주차.pdf 및 source/lecture-pdf/9장 기반"],
    ["사용자 및 그룹", "/etc/group 파일의 역할로 가장 알맞은 것은?", ["그룹 이름, GID, 그룹 구성원 정보를 저장한다.", "커널 이미지 목록만 저장한다.", "디스크 사용량을 실시간 저장한다.", "DNS 질의 결과만 저장한다."], 1, "/etc/group은 그룹 계정 정보와 보조 그룹 구성원 정보를 저장한다.", "source/lecture-pdf/10장 사용자 관리 기반"],
    ["네트워크 서비스", "SSH 공개키 인증에서 서버에 등록되는 것은?", ["클라이언트의 공개키", "클라이언트의 개인키", "서버의 /etc/fstab 전체", "사용자의 평문 암호"], 1, "서버에는 공개키를 등록하고 개인키는 클라이언트가 안전하게 보관해야 한다.", "source/notion/노션_12주차.pdf 기반"],
    ["네트워크 기초", "라우팅 테이블과 기본 게이트웨이를 확인하는 명령으로 수업 범위에 맞는 것은?", ["ip route", "ip passwd", "ip chmod", "ip tar"], 1, "ip route는 라우팅 테이블과 default gateway 확인에 사용한다.", "source/lecture-pdf/14-111장 네트워크 설정 기반"],
    ["서비스 관리", "systemctl enable과 start의 차이를 설명한 것으로 알맞은 것은?", ["enable은 부팅 자동 시작 등록, start는 즉시 실행이다.", "enable은 즉시 중지, start는 자동 시작 해제이다.", "둘 다 로그 조회 전용이다.", "둘 다 파일시스템 포맷 명령이다."], 1, "enable은 자동 시작 등록이고 start는 현재 시점에서 서비스를 시작한다.", "source/notion/노션_11주차.pdf 및 노션_16주차.pdf 기반"]
  ];

  window.OS_FINAL_EXAM_QUESTIONS = make("OS-FINAL-LM2", LM2_TYPE, LM2_SOURCE, lm2Rows).concat(
    make("OS-FINAL-CLASS", CLASS_TYPE, CLASS_SOURCE, classRows)
  );
})();
