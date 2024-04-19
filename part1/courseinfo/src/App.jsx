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
      <Part name={part1.name} exercise={part1.exercises}/>
      <Part name={part2.name} exercise={part2.exercises}/>
      <Part name={part3.name} exercise={part3.exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header course={course} />
      <Content part1 ={part1}
      part2 ={part2}
      part3 ={part3}
      />
      <Footer total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App;