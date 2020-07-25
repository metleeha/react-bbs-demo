import client from './client';

// 유저 전체 리스트 
export const users_get_all = () =>
  client.get('/api/users');

// 유저 아이디로 상세 조회
export const users_get_user = userId =>
  client.get(`/api/users/register/${userId}`);

