import { useState } from "react";


const Statistics = ({good,neutral,bad}) => {
  const all = good+neutral+bad;
  const average = (good-bad)/all;
  const positive = (good/all)*100;
  return (<>
    <h1>Statistics</h1>
    <p>Good:- <span>{good}</span></p>
    <p>Neutral:- <span>{neutral}</span></p>
    <p>Bad:- <span>{bad}</span></p>
    <p>All:- <span>{all}</span></p>
    <p>Average:- <span>{average}</span></p>
    <p>Positive:- <span>{positive}</span></p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <div>
      <h1>Give feedback</h1>
      <hr/>
      <button onClick={()=> {setGood(good+1)}}>Good</button>
      <button onClick={()=> {setNeutral(neutral+1)}}>Neutral</button>
      <button onClick={()=> {setBad(bad+1)}}>Bad</button>
      <hr/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App;