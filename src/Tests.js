import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const Tests = ({ testTypes }) => {
  return (
    <>
      <div className="tests-container">
        <Navbar className="navbar" />
        <div className="tests-wrapper">
          {testTypes.map((test, index) => (
            <div
              className={`test test${index + 1}`}
              onClick={() => window.location.replace(test.type)}
            >
              <a href={test[index]} className="test-title">
                {test.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tests;
