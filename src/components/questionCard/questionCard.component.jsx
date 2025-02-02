import React, { useState } from "react";
import OptionButton from '../buttons/button.components';
import './questionCard.style.css'
import { Outlet } from "react-router-dom";

const QuestionCard = ({ question, options, onOptionClick, selectedOption, nextClick, isOptionClicked }) => {

  return (
    <div className="question-card">
      <div className="card">
        <h2>{question}</h2>
        <div className="options">
          {options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              onOptionClick={onOptionClick}
              selectedOption={selectedOption}
              index = {index}
              isOptionClicked={isOptionClicked}
            />
          ))}
        </div>
        <button id="next-btn" onClick={nextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;