import Home from "./Home";
import "./style.css";
import Tests from "./Tests";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  anxiety,
  adhd,
  pooh,
  efficiency,
  efficiencyResults,
  anxietyResults,
  adhdResults,
  poohResults,
} from "./data.js";

function App() {
  const testTypes = [
    {
      id: 1,
      type: "anxiety",
      title: "Тест на тревожность",
    },
    {
      id: 2,
      type: "efficiency",
      title: "Тест на само-эффективность",
    },
    {
      id: 3,
      type: "adhd",
      title: "Тест на СДВГ",
    },
    {
      id: 4,
      type: "pooh",
      title: 'Тест на психотип из "Винни-Пуха"',
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Tests testTypes={testTypes} />} />
            <Route
              path="anxiety"
              element={
                <Home
                  title={testTypes[0].title}
                  type={testTypes[0].type}
                  data={anxiety}
                  results={anxietyResults}
                />
              }
            />
            <Route
              path="efficiency"
              element={
                <Home
                  title={testTypes[1].title}
                  type={testTypes[1].type}
                  data={efficiency}
                  results={efficiencyResults}
                />
              }
            />
            <Route
              path="adhd"
              element={
                <Home
                  title={testTypes[2].title}
                  type={testTypes[2].type}
                  data={adhd}
                  results={adhdResults}
                />
              }
            />
            <Route
              path="pooh"
              element={
                <Home
                  title={testTypes[3].title}
                  type={testTypes[3].type}
                  data={pooh}
                  results={poohResults}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
