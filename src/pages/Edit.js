import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  // query string 은 페이지 라우팅에 영향을 주지 않는다
  // useSearchParams 훅으로 쿼리스트링의 값을 꺼내올 수 있다
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  // console.log(id);
  // console.log(mode);

  // useNavigate 훅은 페이지 이동을 시켜주는 함수를 반환
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is Edit ✂️</h1>
      {/* setSearchParams를 통해 객체를 만들어 넘겨준다, 쿼리변경 가능 (쿼리명: 쿼리값) */}
      <button
        onClick={() => setSearchParams({ id: 20, mode: 'dark', who: 'ellie' })}
      >
        QS 변경
      </button>
      <button onClick={() => navigate('/')}>홈으로 가기</button>
      {/* 뒤로 가고 싶으면 -1을 넣어주면 됨... I didn't know... */}
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
