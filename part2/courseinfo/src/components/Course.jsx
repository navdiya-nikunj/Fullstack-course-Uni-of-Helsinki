const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercise={part.exercises} />
        );
      })}
    </>
  );
};

const Footer = (props) => {
  console.log(props);
  const total = props.parts.reduce((sum, current) => {
    return sum + current.exercises;
  }, 0);
  return (
    <>
      <p>Total exercises {total}</p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  );
};

export default Course;