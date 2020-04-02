import React from "react";

const Total = props => {
  console.log(props);
  const totalExerciseStr = `Total number of exercises ${" "}`;
  const total = props.exercises.reduce((sumbigd, part) => sumbigd + part);
  return (
    <div>
      <p>
        {totalExerciseStr}
        {total}
      </p>
    </div>
  );
};

export default Total;
