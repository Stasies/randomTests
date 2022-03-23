import React from "react";

const Result = ({ result, results }) => {
  console.log(results);
  return (
    <div className="result-text-container">
      <h2 className="result-title">Ваш результат {result}%</h2>
      <p className="result-text">
        {result <= 20 && results[0].text}
        {result <= 40 && result > 20 ? results[1].text : ""}
        {result <= 60 && result > 40 ? results[2].text : ""}
        {result <= 80 && result > 60 ? results[3].text : ""}
        {result > 80 && results[4].text}
      </p>
      <p className="disclaimer">
        Данный тест был сделан исключительно в развлекательных целях и не должен
        восприниматься всерьез. Результат теста может не соответствовать
        реальности. Некоторые вопросы взяты с{" "}
        <a href="https://www.idrlabs.com/">idrlabs.com</a>{" "}
      </p>
    </div>
  );
};

export default Result;
