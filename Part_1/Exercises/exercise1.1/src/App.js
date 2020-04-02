import React from "react";
import Header from "./Header";
import Content from "./Content.js";
import Total from "./Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  const exercises = course.parts.map(part => part.exercises);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <br></br>
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
