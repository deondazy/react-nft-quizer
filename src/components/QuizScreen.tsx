import {useState} from 'react';


import QuizResult from './QuizResult';
import Question from './Question';

function QuizScreen({retry, shuffledQuestions}: {retry: any, shuffledQuestions: any}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [lifelines, setLifelines] = useState(3);
    let isQuestionEnd = shuffledQuestions.length < currentQuestionIndex + 1;

    if (lifelines === 0) {
        isQuestionEnd = true;
    }

    function calculateLifelines() {
        setLifelines(lifelines - 1);
        setCorrectAnswers(correctAnswers);
    }


    function calculateResult() {
        return {
            total: shuffledQuestions.length,
            correct: correctAnswers,
            percentage: Math.trunc((correctAnswers / shuffledQuestions.length) * 100)
        };
    }
    
    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizResult 
                        result={calculateResult()}
                        retry={retry}
                    />
                ) : (
                    <Question 
                        lifelines={lifelines}
                        question={shuffledQuestions[currentQuestionIndex]}
                        totalQuestions={shuffledQuestions.length}
                        currentQuestion={currentQuestionIndex+1}
                        setAnswer={(index: any)=> {
                            index === shuffledQuestions[currentQuestionIndex].correctOptionIndex ? setCorrectAnswers(correctAnswers+1) : calculateLifelines();
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                    />
                )
            }
        </div>
    );
}

export default QuizScreen;