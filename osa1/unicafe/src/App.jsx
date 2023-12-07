import React, { useState } from 'react';

const Button = ({ clickFunction, text }) => (
  <button onClick={clickFunction}>
    {text}
  </button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button clickFunction={handleGood} text='good' />
        <Button clickFunction={handleNeutral} text='neutral' />
        <Button clickFunction={handleBad} text='bad' />
        <br />
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>total {total}</p>
        <p>average {average}</p>
        <p>positive feedback {positivePercentage}%</p>
      </div>
    </div>
  );
};

export default App;
