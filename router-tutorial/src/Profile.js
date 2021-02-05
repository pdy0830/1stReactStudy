import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';
import Profile from './Profile';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    },
}

const Profiles = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if (!profile) {
      return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;