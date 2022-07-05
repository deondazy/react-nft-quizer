import {useState, useEffect, useRef} from 'react';
import {flushSync} from 'react-dom';

function Question({question, totalQuestions, currentQuestion, setAnswer, lifelines}: {question: any, totalQuestions: number, currentQuestion: number, setAnswer: any, lifelines: number}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const timer: any = useRef(null);
    const progressBar: any = useRef(null);

    const gotoNextQuestion = () => {
        if (timer.current) { 
            clearTimeout(timer.current);
        }

        flushSync(() => {
            setAnswer(selectedOption);
        });

        setSelectedOption(null);
    }

    useEffect(() => {
        progressBar.current.classList.remove('active');

        setTimeout(() => {
            progressBar.current.classList.add('active');
        }, 0);

        timer.current = setTimeout(gotoNextQuestion, 10*1000); // 10 seconds
    }, [question]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>

            <div className="question-meta">

                <div className="question-count">
                    <b> {currentQuestion} </b>
                    of
                    <b> {totalQuestions} </b>
                </div>

                <div className="question-lifelines">
                    {
                        // show three, two, one or 0 lifelines
                        lifelines === 3 ? (
                            <>
                            <i className="icofont-heart"></i>
                            <i className="icofont-heart"></i>
                            <i className="icofont-heart"></i>
                            </>
                        ) : lifelines === 2 ? (
                            <>
                            <i className="icofont-heart"></i>
                            <i className="icofont-heart"></i>
                            </>
                        ) : lifelines === 1 ? (
                            <i className="icofont-heart"></i>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>

            <div className="main">
                <div className="title">
                    <p> {question.title} </p>
                </div>

                <div className="options">
                    {
                        question.options.map((option: any, index: any) => {
                            return (
                                <div 
                                    className={index === selectedOption ? 'option active' : 'option'}
                                    key={index} 
                                    onClick={() => setSelectedOption(index)}
                                >
                                    {option} 
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="control">
                <button onClick={gotoNextQuestion}>Next</button>
            </div>
        </div>
    );
}

export default Question;