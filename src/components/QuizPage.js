import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './../index.css';
import Questions from './Questions';

function QuizPage() {

    const { state } = useLocation();
    const [quizData, setQuizData] = useState();
    const [loadingData, setLoadingData] = useState(false);

    const category = state.category;
    const difficulty = state.difficulty;

    let navigate = useNavigate();

    const handleBack = () => {
        navigate("/quiz-app");
    }

    useEffect(() => {

        async function getData() {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
                }${difficulty && `&difficulty=${difficulty}`}&type=multiple&encode=base64`)

            let questions = [];

            data.results.forEach(function (question) {
                let questionObject = {
                    "question": atob(question.question),
                    "answers": question.incorrect_answers,
                    "correct_answer": atob(question.correct_answer)
                }

                questionObject.answers.push(question.correct_answer);

                questionObject.answers.forEach(function(part, index, theArray) {
                    theArray[index] = atob(theArray[index]);
                  });

                questions.push(questionObject);
            })

            setQuizData(questions);
            setLoadingData(true);
        };

        getData();

    }, [])

    return (
        <Questions questions = {quizData} loadingData = {loadingData} />
    )
}

export default QuizPage
