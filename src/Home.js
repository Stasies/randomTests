import React, { useRef, useState } from "react";
import Result from "./Result";
import Navbar from "./components/Navbar";

const Home = ({ type, data, results, title }) => {
  const wrapper = useRef();
  const buttons = [1, 2, 3, 4, 5];
  const [answers, setAnswers] = useState([]);
  const topic = window.location.pathname.substring(1);
  const [showResult, setShowResult] = useState(false);
  const background = ["#7bdff2", "#b2f7ef", "#eff7f6", "#f7d6e0", "#f2b5d4"];

  let total = buttons[buttons.length - 1] * data.length;
  console.log(data);
  console.log(results);

  const handleClick = (e) => {
    let number = e.target.value.charAt(e.target.value.length - 1);
    let question = e.target.value.slice(0, -1);
    let color = background[number - 1];
    answers.push(parseInt(number));
    document.getElementById(
      question
    ).style.cssText = `pointer-events: none; opacity: 0.7; `;

    window.scrollBy(0, 320, { behavior: "smooth" });
    e.target.style.background = color;
  };
  const finish = () => {
    let answ = answers.reduce((a, b) => a + b);
    let result = Math.round((answ / total) * 100);
    setShowResult(result);
    wrapper.style.display = "none";
  };
  const changeColor = (e) => {
    let back = background[e.target.value.charAt(e.target.value.length - 1) - 1];
    e.target.style.background = back;

    const timer = setTimeout(() => {
      e.target.style.background = "transparent";
    }, 300);
  };

  return (
    <>
      <Navbar className="navbar" />
      <div className="container">
        <div className="wrapper" ref={wrapper}>
          {showResult ? (
            <Result
              results={results}
              result={showResult}
              className="result-container"
            />
          ) : (
            <>
              <h1 className="test-title">{title}</h1>
              {data?.map((q, index) => (
                <div key={index} id={q.type} className="question">
                  <h4 className="question-text">{q ? q.text : ""}</h4>
                  <div className="choice-container">
                    <p className="option-text">совсем нет</p>
                    {buttons.map((b, index) => (
                      <button
                        className="option"
                        key={index}
                        value={q.type + b}
                        id={q.type + b}
                        onClick={(e) => handleClick(e)}
                        onMouseOver={(e) => changeColor(e)}
                        // onMouseLeave={(e) => removeColor(e)}
                        style={{ border: `3px solid ${background[index]}` }}
                      ></button>
                    ))}
                    <p className="option-text">точно да</p>
                  </div>
                </div>
              ))}

              <button className="result-button" onClick={() => finish()}>
                результат
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
