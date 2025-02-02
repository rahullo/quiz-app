import React from 'react';

const Scoreboard = ({ score, totalQuestions }) => {
  return (
    <div className="scoreboard">
      <h2>Quiz Completed!</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default Scoreboard;