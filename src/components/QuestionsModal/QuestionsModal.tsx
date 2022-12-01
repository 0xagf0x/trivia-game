import React, {useEffect, useState} from 'react';
import Style from "./Questions.module.css";
import { Button } from '@mui/material';

const QuestionsModal = () => {
    const [counter, setCounter] = useState(1)
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [question1, setQuestion1] = useState(true);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);
    const [question6, setQuestion6] = useState(false);
    const [question7, setQuestion7] = useState(false);
    const [question8, setQuestion8] = useState(false);
    const [question9, setQuestion9] = useState(false);
    const [question10, setQuestion0] = useState(false);

    const questions = [
    {
        questionTitle: "What is the tallest mountain in the world?",
        answers : [
            {title: "K2"},
            {title: "Everest"},
            {title: "Mt. Olympia"},
            {title: "Pilot Butte"},
        ],
        correctAnser: {
            answer: "Everest"
        }
    },
    {
        questionTitle: "What is the longest river in the world?",
        answers : [
            {title: "Amazon"},
            {title: "Nile"},
            {title: "James"},
            {title: "Mississippi"},
        ],
        correctAnser: {
            answer: "Amazon"
        }
    },
   
    ];

    useEffect(() => {
      setQuestion1(true)
    }, [])
    

    const handleAnswer = (el:any, e:any) => {
        console.log('e', e.target);

        console.log('el', el.target);


        if (e.title === el.correctAnser.answer) {
            console.log('correct')
            setCounter(counter + 1)
            console.log(counter);
            // setIsCorrectAnswer(true)
        } else {
            console.log('wrong')
            setIsCorrectAnswer(false);
        }
    }

    return (
        <div className={Style.modal}>
            <div className={Style.modal_inner}>
                <h3 className={Style.modal__inner__title}>Question {counter}</h3>

                {questions.map((el, i) => (
                    <>
                        <h4 key={i + 1} className={Style.modal__inner__subtitle}>{el.questionTitle}</h4>
                        <div className={Style.modal__inner__btn_container}>
                            {el.answers.map((e, _i) => (
                                <div className={Style.modal__inner__btn_container__item}>
                                    <Button
                                        key={_i + 1}
                                        variant="outlined"
                                        color={isCorrectAnswer ? "primary" : "secondary"}
                                        data-value={e.title}
                                        onClick={() => {
                                            handleAnswer(el, e)
                                        }}
                                    >
                                        {e.title}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default QuestionsModal