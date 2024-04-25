import { useState } from "react";

const Button = ({text,handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

const StaticLine = ({text,value}) => {
  return (
    <p>
      {text}:- {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <h1>Statistics</h1>

        <StaticLine text={"Good"} value={good} />
        <StaticLine text={"Neutral"} value={neutral} />
        <StaticLine text={"Bad"} value={bad} />
        <hr />
        <StaticLine text={"All"} value={all} />
        <StaticLine text={"Average"} value={average} />
        <StaticLine text={"Positive"} value={positive} />
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <hr />
      <Button text={"Good"} handleClick={() => {setGood(good + 1)}} />
      <Button text={"Neutral"} handleClick={() => {setNeutral(neutral + 1)}} />
      <Button text={"Bad"} handleClick={() => {setBad(bad + 1)}} />
      <hr />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default App;
