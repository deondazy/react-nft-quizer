import {useState} from 'react';

import Navbar from './components/Navbar';
import QuizShuffleScreen from './components/QuizShuffleScreen';
import JoinScreen from './components/JoinScreen';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [whichQuiz, setWhichQuiz] = useState('');

    const startQuiz = (whichQuiz: string) => {
        setWhichQuiz(whichQuiz);
        setIsQuizStarted(true);
    }
    
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
                        <JoinScreen startQuiz={startQuiz} />
                    )
                }
            </div>
        </>
    );
}

export default App;
