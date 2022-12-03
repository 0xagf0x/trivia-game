import React, {useEffect, useState} from 'react';
import Style from "./Questions.module.css";
import { Button } from '@mui/material';

const QuestionsModal = () => {
    const [counter, setCounter] = useState(1)
    const [score, setScore] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinalResults, setShowFinalResults] = useState(false);
    const [motivational, setMotivational] = useState('');

    const wrongAnswersArray:any = [];
    const [wrongAnswers, setWrongAnswers] = useState(wrongAnswersArray);

    const questions = [
        {
            questionTitle: "What is the tallest mountain in the world?",
            options : [
                {id: 0, title: "K2", isCorrect: false},
                {id: 1, title: "Mt. Everest", isCorrect: true},
                {id: 2, title: "Kangchenjunga", isCorrect: false},
                {id: 3, title: "Pilot Butte", isCorrect: false},
            ],
        },
        {
            questionTitle: "What is the longest river in the world?",
            options : [
                {id: 0, title: "Amazon", isCorrect: true},
                {id: 1, title: "Nile", isCorrect: false},
                {id: 2, title: "James", isCorrect: false},
                {id: 3, title: "Mississippi", isCorrect: false},
            ],
        },
        {
            questionTitle: "Which country is also called The Netherlands?",
            options : [
                {id: 0, title: "Norway", isCorrect: false},
                {id: 1, title: "Sweden", isCorrect: false},
                {id: 2, title: "Holland", isCorrect: true},
                {id: 3, title: "Canada", isCorrect: false},
            ],
        },
        {
            questionTitle: "How many time zones does Russia have?",
            options : [
                {id: 0, title: "2", isCorrect: false},
                {id: 1, title: "7", isCorrect: false},
                {id: 2, title: "8", isCorrect: false},
                {id: 3, title: "11", isCorrect: true},
            ],
        },
        {
            questionTitle: "What type of leaf is on the Canadian flag?",
            options : [
                {id: 0, title: "Oak", isCorrect: false},
                {id: 1, title: "Maple", isCorrect: true},
                {id: 2, title: "Chesnut", isCorrect: false},
                {id: 3, title: "Arrowhead", isCorrect: false},
            ],
        },
        {
            questionTitle: "What country is known to have the best quality tap water?",
            options : [
                {id: 0, title: "USA", isCorrect: false},
                {id: 1, title: "Canada", isCorrect: false},
                {id: 2, title: "Switzerland", isCorrect: true},
                {id: 3, title: "Finland", isCorrect: false},
            ],
        },
        {
            questionTitle: "What is the capital of America?",
            options: [
                { id: 0, title: "New York City", isCorrect: false },
                { id: 1, title: "Boston", isCorrect: false },
                { id: 2, title: "Santa Fe", isCorrect: false },
                { id: 3, title: "Washington DC", isCorrect: true },
            ],
        },
        {
            questionTitle: "What year was the Constitution of America written?",
            options: [
                { id: 0, title: "1787", isCorrect: true },
                { id: 1, title: "1776", isCorrect: false },
                { id: 2, title: "1774", isCorrect: false },
                { id: 3, title: "1826", isCorrect: false },
            ],
        },
        {
            questionTitle: "Who was the second president of the US?",
            options: [
                { id: 0, title: "John Adams", isCorrect: true },
                { id: 1, title: "Paul Revere", isCorrect: false },
                { id: 2, title: "Thomas Jefferson", isCorrect: false },
                { id: 3, title: "Benjamin Franklin", isCorrect: false },
            ],
        },
        {
            questionTitle: "What is the largest state in the US?",
            options: [
                { id: 0, title: "California", isCorrect: false },
                { id: 1, title: "Alaska", isCorrect: true },
                { id: 2, title: "Texas", isCorrect: false },
                { id: 3, title: "Montana", isCorrect: false },
            ],
        },
    ];
    
    const handleAnswer = (e:any) => {
        console.log('test', e);
        if (e === true) {
            setCounter(counter + 1);
            setScore(score + 1);
        } else {
           console.log('wrong');
        }

        if (currentQuestion + 1 < questions.length ) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowFinalResults(true);
            if(score <= 3) {
                setMotivational('Kinda bad, not gonna lie.')
            } else if (score > 3 && score <= 5) {
                setMotivational('Halfway there, but still room to improve!')
            } else if (score > 5 && score <= 9) {
                setMotivational('Not too shabby!');
            } else if (score === 10) {
                setMotivational("Wow! You're a trivia master!");
            }
        }
    }

    const handleRestart = () => {
        setCounter(1);
        setScore(0);
        setShowFinalResults(false);
        setCurrentQuestion(0);
    }


    return (
        <div className={Style.modal}>
            <div className={Style.modal_inner}>
                <h3 className={Style.modal__inner__title}>Question {counter}</h3>
                <h5 className={Style.modal__inner__subtitle}> {currentQuestion + 1} out of {questions.length}</h5>
                <h4 className={Style.modal__inner__subtitle}>{questions[currentQuestion].questionTitle}</h4>
                <div className={Style.modal__inner__btn_container}>
                    <div className={Style.modal__inner__btn_container}>
                        {showFinalResults 
                        ? 
                            <>
                                <h1>Quiz Results</h1>
                                <h5>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h5>
                                <span>{motivational}</span>
                                <Button
                                    variant="outlined"
                                    color={isCorrectAnswer ? "primary" : "secondary"}
                                    data-value=''
                                    onClick={() => handleRestart()}
                                >
                                    Restart Game
                                </Button>
                            </>
                        : 
                            <div className={Style.button_row}>
                                {questions[currentQuestion].options.map((_option, i) => {
                                    return (
                                        <div key={_option.id} className={Style.modal__inner__btn_container__item}>
                                            <Button
                                                variant="outlined"
                                                color={isCorrectAnswer ? "primary" : "secondary"}
                                                data-value=''
                                                onClick={() => handleAnswer(_option.isCorrect)}
                                            >
                                                {_option.title}
                                            </Button>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsModal