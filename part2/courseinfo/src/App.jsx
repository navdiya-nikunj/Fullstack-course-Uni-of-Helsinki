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

const Content = ({parts}) => {
  
  return (
    <>
      {parts.map((part)=> {
        return (
          <Part key={part.id} name={part.name} exercise={part.exercises}/>
        )
      })}
    </>
  )
}

const Footer = (props) => {
  console.log(props);
  let  total = 0;
  props.parts.forEach(element => {
    total += element.exercises;
  });
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const Course = ({course}) => {

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}
      />
      <Footer parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

export default App;