import React, { useState } from 'react';
import './index.css';

const App = () => {

  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jump5Num() {
    setNum(num + 5);
  }

  function jump5Num() {
    setNum(num - 5);
  }

  return (
    <div className="container">
      <h1>{num}</h1>

      <div className="buttons">
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={jump5Num}>Increase by 5</button>
        <button onClick={jump5Num}>Decrese by 5</button>
      </div>
    </div>
  );
};

export default App;
