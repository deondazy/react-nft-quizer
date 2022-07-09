import {useState, useEffect, useReducer} from 'react';

import Navbar from './components/Navbar';
import QuizShuffleScreen from './components/QuizShuffleScreen';
import JoinScreen from './components/JoinScreen';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [whichQuiz, setWhichQuiz] = useState('');

    const getLocalStorageData = (whichQuiz: string) => {
        if (localStorage.getItem('nftquizer_quiz:' + whichQuiz) === null) {
            return {
                isStarted: false,
                timer: null
            }
        }

        return {
            isStarted: true,
            timer: localStorage.getItem('nftquizer_quiz:' + whichQuiz)
        }
    };

    const initialNftData = {
        azuki: {
            isStarted: getLocalStorageData('azuki').isStarted,
            timer: getLocalStorageData('azuki').timer
        },
        bayc: {
            isStarted: getLocalStorageData('bayc').isStarted,
            timer: getLocalStorageData('bayc').timer
        },
        cryptoPunks: {
            isStarted: getLocalStorageData('cryptoPunks').isStarted,
            timer: getLocalStorageData('cryptoPunks').timer
        },
        doodles: {
            isStarted: getLocalStorageData('doodles').isStarted,
            timer: getLocalStorageData('doodles').timer
        },
        meebits: {
            isStarted: getLocalStorageData('meebits').isStarted,
            timer: getLocalStorageData('meebits').timer
        },
        sandbox: {
            isStarted: getLocalStorageData('sandbox').isStarted,
            timer: getLocalStorageData('sandbox').timer
        },
        wow: {
            isStarted: getLocalStorageData('wow').isStarted,
            timer: getLocalStorageData('wow').timer
        }
    };

    const [nftData, updateNftData] = useReducer((state: any, updates: any) => ({...state, ...updates}), initialNftData);

    const startQuiz = (whichQuiz: string) => {
        const quizTime: string = new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(); // 12 hours from start
        updateNftData({[whichQuiz]: {isStarted: true, timer: quizTime}});
        localStorage.setItem('nftquizer_quiz:' + whichQuiz, quizTime);

        setWhichQuiz(whichQuiz);
        setIsQuizStarted(true);
    }

    function isTimerOver(timer: string | null): boolean | undefined {
        if (timer === null) return;
        
        const now = new Date(Date.now());
        const quizTime = new Date(timer);

        return now > quizTime;
    }

    function deleteQuizTimer(quiz: string, isTimerExpired: boolean | undefined) {
        if (!isTimerExpired) return;

        localStorage.removeItem('nftquizer_quiz:' + quiz);
        updateNftData({[quiz]: {isStarted: false, timer: null}});
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            deleteQuizTimer('azuki', isTimerOver(nftData.azuki.timer));
            deleteQuizTimer('bayc', isTimerOver(nftData.bayc.timer));
            deleteQuizTimer('cryptoPunks', isTimerOver(nftData.cryptoPunks.timer));
            deleteQuizTimer('doodles', isTimerOver(nftData.doodles.timer));
            deleteQuizTimer('meebits', isTimerOver(nftData.meebits.timer));
            deleteQuizTimer('sandbox', isTimerOver(nftData.sandbox.timer));
            deleteQuizTimer('wow', isTimerOver(nftData.wow.timer));
        }, 1000);

        return () => clearInterval(intervalId);
        
    }, [nftData]);
    
    return (
        <>
            <div className="overlay"></div>
            <Navbar />
            <div className="quiz-container">
                {
                    isQuizStarted ? (
                        <div className="quiz-wrap">
                            <QuizShuffleScreen retry={() => setIsQuizStarted(false)} whichQuiz={whichQuiz} /> 
                        </div>
                    ) : (
                        <JoinScreen 
                            startQuiz={startQuiz} 
                            nftData={nftData} 
                        />
                    )
                }
            </div>
        </>
    );
}

export default App;
