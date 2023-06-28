import React from 'react';

// COMPONENTS
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>HOME 🏠</h1>
      <Button name={'OK'} onclick={() => alert('Yes!')} />
      <Button type={'POSITIVE'} name={'OK'} onclick={() => alert('Hi!')} />
      <Button type={'NEGATIVE'} name={'OK'} onclick={() => alert('Bye!')} />
    </div>
  );
};

export default Home;
