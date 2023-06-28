import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {
  // Path Variable 을 'id'로 사용
  // diary의 아이디를 전달
  const { id } = useParams();

  return (
    <div>
      <h1>This is Diary 📝</h1>
    </div>
  );
};

export default Diary;
