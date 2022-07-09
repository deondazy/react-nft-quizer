import {useState} from 'react';

import Navbar from './components/Navbar';
import QuizShuffleScreen from './components/QuizShuffleScreen';
import JoinScreen from './components/JoinScreen';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [whichQuiz, setWhichQuiz] = useState('');

    const startQuiz = (whichQuiz: string) => {
        // Add started quiz and time to local storage with key 'nftquizer_quiz'
        const quizTime: string = new Date().getTime().toString();
        localStorage.setItem('nftquizer_quiz:' + whichQuiz, quizTime);

        setWhichQuiz(whichQuiz);
        setIsQuizStarted(true);
    }

    // Use local storage to check which quiz has been started
    const isAzukiStarted = localStorage.getItem('nftquizer_quiz:azuki') !== null;
    const isBaycStarted = localStorage.getItem('nftquizer_quiz:bayc') !== null;
    const isCryptoPunksStarted = localStorage.getItem('nftquizer_quiz:cryptoPunks') !== null;
    const isDoodlesStarted = localStorage.getItem('nftquizer_quiz:doodles') !== null;
    const isMeebitsStarted = localStorage.getItem('nftquizer_quiz:meebits') !== null;
    const isSandboxStarted = localStorage.getItem('nftquizer_quiz:sandbox') !== null;
    const isWowStarted = localStorage.getItem('nftquizer_quiz:wow') !== null;
    
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
                        <JoinScreen startQuiz={startQuiz} isAzukiStarted={isAzukiStarted} isBaycStarted={isBaycStarted} isCryptoPunksStarted={isCryptoPunksStarted} isDoodlesStarted={isDoodlesStarted} isMeebitsStarted={isMeebitsStarted} isSandboxStarted={isSandboxStarted} isWowStarted={isWowStarted} />
                    )
                }
            </div>
        </>
    );
}

export default App;
