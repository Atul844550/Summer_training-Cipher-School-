import React, { useState } from 'react';
import './App.css';

const colors = ['#FF6347', '#FFD700', '#ADFF2F', '#40E0D0', '#FF69B4', '#BA55D3'];

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  const handleCardClick = () => {
    setClickCount(prevCount => prevCount + 1);
    changeBgColor();
  };

  const handleIncrease = () => {
    setClickCount(prevCount => prevCount + 1);
    changeBgColor();
  };

  const handleDecrease = () => {
    setClickCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    changeBgColor();
  };

  const handleReset = () => {
    setClickCount(0);
    setBgColor('white');
  };

  const changeBgColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="App">
      <div className="card" onClick={handleCardClick} style={{ backgroundColor: bgColor }}>
        <h1>{clickCount}</h1>
      </div>
      <div className="buttons">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleReset}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
