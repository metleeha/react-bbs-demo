# MSA React Front Demo 
- web front service for msa-bff-sample project

## 프로젝트 구조 
```
├── components
│   ├── App.js
│   ├── admin
│   │   └── UserList.js
│   ├── auth
│   │   ├── AuthForm.js
│   │   ├── LoginFrom.js
│   │   └── RegisterForm.js
│   ├── common
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── HeaderContainer.js
│   └── post
│       └── FeaturedPost.js
├── config
│   └── config.js
├── index.css
├── index.js
├── pages
│   ├── AdminPage.js
│   ├── BoardPage.js
│   ├── HomePage.js
│   ├── LogInPage.js
│   └── RegisterPage.js
├── reducers
│   ├── auth.js
│   ├── index.js
│   ├── loading.js
│   └── user.js
├── sagas
│   ├── api
│   │   ├── auth.js
│   │   ├── client.js
│   │   └── users.js
│   └── createRequestSaga.js
├── serviceWorker.js
└── store
```



#### /component 
페이지를 구성하는 기능 단위
*Container라고 명명한 Component는 State 관리를 위한 액션이 추가되어 페이지에서 사용된 컴포넌트입니다. 

#### /config
axios 통신할 백엔드 서비스 호스팅

#### /pages
화면 

### redux

Redux는 자신이 관리하는 데이터 모음인 상태(state) 를 스토어(Store) 라는 저장소에 두고 이 상태를 변경할 수 있는 것은 액션(action) 으로 제한합니다.
액션은 단순한 문자열이며 이 액션으로 상태를 변경하기 위해서는 스토어(Store)에 디스패치(dispatch) 하는 행위가 필요합니다.
디스패치(dispatch) 할 때 전달할 정보는 일반 자바스크립트 객체입니다. 

실제 프로젝트에 Redux를 쓰다보면 액션이 동시다발적으로 발생하며, 액션 중간에 실제 Redux 액션이 아닌 일반 로직이 수행되거나 Ajax Call 등의 서버 리퀘스트도 발생한다. 그 와중에 여러 액션의 실행 보장도 해줘야 하기 때문에 코드가 굉장히 복잡해질 수 있습니다. 
기본적으로 하나의 액션을 변경하기 위한 하나의 핸들링 함수를 구현하는데, 중간에 다른 액션이나 이벤트가 파생되는 현상을 부수 효과 (Side Effect)라고 부릅니다.
- Ajax 콜
- 비동기 타이머
- 애니메이션 후 콜백
- 요청 중 취소
- 스로틀링
- 디바운싱
- 페이지 이동
이러한 여러 비동기 액션 수행을 관리하기 위해 Redux-Saga를 적용했습니다. 

#### /reducers
state의 action을 정의하고 상태 변경을 핸들링하기 위한 함수 모음

#### /sagas 
요청 saga의 공통 템플릿과 api 라우터를 정의했습니다. 
컴포넌트별 flow를 관리하는 saga함수 정의는 reducer 폴더 아래 각 파일에 합쳐두었습니다. 

## 설치 명령 
- 개발 
```bash
yarn start 
```
- 빌드
```bash
yarn build
```