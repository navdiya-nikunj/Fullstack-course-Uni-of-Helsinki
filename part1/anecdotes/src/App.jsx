import { useEffect, useState } from 'react'

const Button = ({text,handleClick}) => {
  return (
    <div>
    <button onClick={handleClick}>
      {text}
    </button>
    </div>
  )
}

const MostVotes = ({anecdotes,votes}) => {
  const max = Math.max(...votes);
  const idx = votes.indexOf(max);
  
  if(votes.every(el => el === 0)){
   return (<></>)
}else {
  return (
    <div>
      <h1>Most voted anecdotes</h1>
      <p>{anecdotes[idx]}</p>
    </div>
  )
}
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);
   
  const [selected, setSelected] = useState(0);
  const getRandomAncedotes = () => {

    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const handelVote = () =>{
      const v = [...votes];
      console.log(v);
      v[selected] += 1;
      setVotes(v);
  }



  return (
    <div>
      <h1>Anecedote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>
      has {votes[selected]} votes</p>
      <Button text={"Vote"} handleClick={handelVote}/>
      <Button text={"Next anecdotes"} handleClick={getRandomAncedotes}/>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App