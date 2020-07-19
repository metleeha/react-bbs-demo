import React from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/Member';

const members = [
  {
    'id': 'admin',
    'userName': '어드민',
    'userEmail': 'admin@test.com',
    'phoneNm': '010-1234-5678',
    'regDate': '2020-07-20',
    'regStatus': 'approved'
  },
  {
    'id': 'dev',
    'userName': '개발자',
    'userEmail': 'dev@test.com',
    'phoneNm': '010-1111-5678',
    'regDate': '2020-07-20',
    'regStatus': 'approved'
  },
  {
    'id': 'test',
    'userName': '테스터',
    'userEmail': 'test@test.com',
    'phoneNm': '010-222-5678',
    'regDate': '2020-07-20',
    'regStatus': 'approved'
  }
]

function App() {
  return (
    <div>
      {
        members.map(c => {
          return (
            <Member
              id={c.id}
              userName={c.userName}
              userEmail={c.userEmail}
              phoneNm={c.phoneNm}
              regDate={c.regDate}
              regStatus={c.regStatus}
            ></Member>
          );
        })
      }
    </div>
  );
}

export default App;
