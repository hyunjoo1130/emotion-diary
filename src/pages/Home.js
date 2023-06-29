import React from 'react';

// COMPONENTS
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>HOME 🏠</h1>
      <Button name={'OK'} onclick={() => alert('Hi!')} />
      <Button type={'POSITIVE'} name={'OK'} onclick={() => alert('Good!')} />
      <Button type={'NEGATIVE'} name={'OK'} onclick={() => alert('Bad!')} />
    </div>
  );
};

export default Home;
