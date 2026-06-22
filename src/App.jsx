import "./App.css";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ];

  const isFinished = currentQuestion >= questions.length;
  const current = questions[currentQuestion];

  function checkAnswer(option) {
    if (option === current?.answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption(option);
    setIsAnswered(true);
  }

  function handleNext() {
    setCurrentQuestion((prev) => prev + 1);
    setIsAnswered(false);
    setSelectedOption(null);
  }

  function handleRestart() {
    setScore(0);
    setIsAnswered(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
  }

  function getButtonStyle(option) {
    if (!isAnswered) {
      return "";
    }
    if (option === current.answer) {
      return "correct";
    }
    if (option === selectedOption) {
      return "wrong";
    }
    return "";
  }

  if (isFinished) {
    return (
      <div className="quiz-card">
        <h2>Quiz Completed!</h2>
        <p className = "score">
          You scored {score} out of {questions.length}
        </p>
        <button onClick={handleRestart} className="btn-primary">Restart</button>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      <h2>Question: {current?.question}</h2>

      <div className="options">
        {current?.options.map((option, index) => {
          return (
            <button
              className={getButtonStyle(option)}
              disabled={isAnswered}
              key={index}
              onClick={() => {
                checkAnswer(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && currentQuestion < questions.length && (
        <button className="btn-primary"
          onClick={() => {
            handleNext();
          }}
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export default App;
