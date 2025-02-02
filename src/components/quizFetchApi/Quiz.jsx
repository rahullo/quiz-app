import React, { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import QuestionCard from '../questionCard/questionCard.component';
import './quiz.styles.css'
import ScoreBoard from '../Scoreboard'

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionClicked, setIsOptionClicked] = useState(false); ///edited
  

  const fetchQuizData = async () =>  {
    console.log("Hello 1 \n")
    await fetch("/api/Uw5CrX")
        .then((response) => response.json())
        .then((data) => {
          console.log("Hello 2")
          console.log(data.questions);
          setQuizData(data.questions);
        })
        .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    const getQuizData = async () => {
    fetchQuizData();
    };
    getQuizData();
  }, []);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedOption({ isCorrect, index })
    setIsOptionClicked(true); ///edited
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // Reset selected option for the next question
    setIsOptionClicked(false); // Reset option clicked state
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-containers">

      <Outlet/>
      {showScore ? (
        <ScoreBoard score={score} totalQuestions={quizData.length}/>

      ):( 
        <>
        {quizData.length > 0 && (
              <QuestionCard
                question={quizData[currentQuestionIndex].description}
                options={quizData[currentQuestionIndex].options}
                onOptionClick={handleAnswerOptionClick}
                selectedOption={selectedOption}
                nextClick = {handleNextQuestion}
                isOptionClicked={isOptionClicked}
              />

          )}
        </>
      )}
    </div>
  );
};

export default Quiz;