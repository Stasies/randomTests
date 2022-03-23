import React, { useState } from "react";

const Question = (props) => {
  const buttons = [1, 2, 3, 4];
  const questions = ["why", "who", "when", "how", "which"];

  const handleClick = (e) => {
    console.log(e.target.value.charAt(e.target.value.length - 1));
    let number = e.target.value.charAt(e.target.value.length - 1);
    let question = e.target.value.slice(0, -1);
    document.getElementById(question).style.display = "none";
    answers.push(parseInt(number));
    console.log(answers);
  };

  const { q, index, answers } = props;
  return (
    <div key={index} id={q}>
      <h2>{q ? q : ""}</h2>
      {buttons.map((b, index) => (
        <>
          <button
            key={index}
            value={q + b}
            id={q + b}
            onClick={(e) => handleClick(e)}
          >
            {b}
          </button>
        </>
      ))}
    </div>
  );
};

export default Question;
