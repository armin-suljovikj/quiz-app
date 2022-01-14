import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './../index.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Questions(props) {

    const quizData = props.questions;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let navigate = useNavigate();

    const handleAnswerOptionClick = (answer, correctAnswer) => {


        if (answer === correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleBack = () => {
        navigate("/quiz-app");
    }

    return (

        props.loadingData ?

            <React.Fragment>
                <div className='questionContainer'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {quizData.length}
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{quizData.length}
                                </div>
                                <div className='question-text'>{quizData[currentQuestion].question}</div>
                            </div>
                            <div className='answer-section'>
                                {quizData[currentQuestion].answers.map((answerOption, index) => (
                                    <button key={index} onClick={() => handleAnswerOptionClick(answerOption, quizData[currentQuestion].correct_answer)}>{answerOption}</button>
                                ))}
                            </div>

                        </React.Fragment>
                    )}
                </div>
                <div className="buttonCenterContainer">
                    <button className="buttonWidth" onClick={handleBack}>Go Back</button>
                </div>
            </React.Fragment>
            :
            <Box className="centerElement" sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
    )
}

export default Questions
