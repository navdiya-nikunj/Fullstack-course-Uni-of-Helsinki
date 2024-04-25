import { useState } from "react";

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
      <h1>Statistics</h1>
      <p>Good:- <span>{good}</span></p>
      <p>Neutral:- <span>{neutral}</span></p>
      <p>Bad:- <span>{bad}</span></p>
      <p>All:- <span>{good+neutral+bad}</span></p>
      <p>Average:- <span>{((good*1)+(bad*(-1)))/(good+neutral+bad)}</span></p>
      <p>Positive:- <span>{(good*100)/(good+neutral+bad)}</span></p>
    </div>
  )
}
export default App;