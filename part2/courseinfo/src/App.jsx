const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
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
  const total = props.parts.reduce((sum, current) => {
    return sum + current.exercises;
  }, 0);
  return (
    <>
      <p>Total exercises {total}</p>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web developmet Curriculam</h1>
      {courses.map((course) => {
        return (
          <Course key={course.id} course={course}/>
        )
      })}
    </div>
  )
}

export default App;