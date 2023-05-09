# instaclone2023init

<!--
^ 자주사용목록
*포트실행중이라 죽이기
! 서버 PID확인  lsof -i :4000
! 서버 중지  kill -9 pid  (ex kill -9 27106)
*prisma migrate 명령어  npm run migrate dev
*prisma studio 명령어 npm run studio

* npm init
* f1 + add gitignore + node
* 아폴로서버,graphql 설치 : npm i apollo-server@2.25.2 graphql@15.8.0
* nodemon설치 : npm i nodemon@2.0.22 --save-dev 적용 "dev": "nodemon --exec node server.js"
* 바벨패키지설치 : npm i @babel/core@7.21.8 @babel/preset-env@7.21.5 @babel/node@7.20.7 --save-dev
* babel.config.json 파일 생성후 적용 "dev": "nodemon --exec babel-node server.js"

! babel.config.json 파일과  babelrc  파일의차이
! babel.config.json: Babel 7부터 도입된 설정 파일입니다. 주로 monorepo 프로젝트에서 사용됩니다. 이 파일에 설정한 Babel
!      플러그인   및 프리셋이 프로젝트 전체에 영향을 미칩니다.
! .babelrc: Babel 6까지 사용되던 설정 파일입니다. 주로 단일 프로젝트에서 사용됩니다. 이 파일에 설정한 Babel 플러그인 및
!     프리셋이 해당 폴더와 그 하위 폴더에서만 적용됩니다.


* prisma 섳치 :npm install prisma --save-dev // npx prisma init
! 역할:sql코드 필요없이 자바스크립트 코드 작성시 prisma가 데이터베이스와 대신 소통
* pgAdmin 4 설치 : https://www.pgadmin.org/download/pgadmin-4-windows/
! postgresql 없을경우에는 https://www.enterprisedb.com/downloads/postgres-postgresql-downloads 여기서한번에설치
!wl2일경우
!sudo apt update
!sudo apt install postgresql postgresql-contrib
!sudo service postgresql status
!sudo service postgresql start
!sudo -u postgres psql -c 'SHOW config_file'           --이걸로 파일위치확인
!sudo nano  /etc/postgresql/14/main/postgresql.conf    --이걸로파일염
!listen_addresses = '*'                                --이거추가후 저장
!hostname -I                                           --이걸로 ip 알아내서 아래 ip 작성
!sudo nano /etc/postgresql/14/main/pg_hba.conf         --이걸로 파일열고
!host  all  all   172.19.64.170/32   trust             --맨밑에 이거추가
!sudo service postgresql restart

* .env 파일에 postgresql에서 설정한 내용으로 계정패스워드등등수정

* prisma migrate : prisma migrate dev
!  역할: schema.prisma 파일의 데이터모델을 쓰고 설명할 수 있게 해줌
!  prisma migrate는 데이터베이스의 형태를 변형시켜주는 것으로 자체적으로
!   prisma client를 생성하지 않으나 dev 명령어와 함께 실행되면 자동으로 prisma client를 생성해준다.
!  client : 어떤 방식으로 데이터베이스와 상호작용하는가
! name은 init으로헀음

* 데이터베이스의 model시각화  ---  npx prisma studio

*graphql schema 쉽게모아오려고 설치
!npm i @graphql-tools/schema @graphql-tools/load-files @graphql-tools/merge
!에러생겨서 파일에 다음코드 추가  "type": "module",
!이후 각 파일마다 import할때 .js까지 전부 입력

*npm i dotenv 설치

-->
