const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.name} {props.exercise}</p>
  </>
  )
}

const Content = (props) => {
  const {part1,part2,part3} = {...props};
  return (
    <>
      <Part name={part1.name} exercise={part1.exercise}/>
      <Part name={part2.name} exercise={part2.exercise}/>
      <Part name={part3.name} exercise={part3.exercise}/>
    </>
  )
}

const Footer = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course={course} />
      <Content part1 ={{
        name:`${part1}`,
        exercises:`${exercises1}`
      }}
      part2 ={{
        name:`${part2}`,
        exercises:`${exercises2}`
      }}
      part3 ={{
        name:`${part3}`,
        exercises:`${exercises3}`
      }}
      />
      <Footer total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;