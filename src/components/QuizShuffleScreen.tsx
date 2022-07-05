import QuizScreen from "./QuizScreen";
import azuki from '../data/azuki.json';
import bayc from '../data/bayc.json';
import cryptoPunks from '../data/cryptoPunks.json';
import doodles from '../data/doodles.json';
import meebits from '../data/meebits.json';
import sandbox from '../data/sandbox.json';
import wow from '../data/wow.json';

function QuizShuffleScreen({retry, whichQuiz}: {retry: any, whichQuiz: string}) {
    let shuffledQuestions: {};
    
    switch (whichQuiz) {
        case 'azuki':
            shuffledQuestions = azuki.sort(() => Math.random() - .5);
            break;
        case 'bayc':
            shuffledQuestions = bayc.sort(() => Math.random() - .5);
            break;
        case 'cryptoPunks':
            shuffledQuestions = cryptoPunks.sort(() => Math.random() - .5);
            break;
        case 'doodles':
            shuffledQuestions = doodles.sort(() => Math.random() - .5);
            break;
        case 'meebits':
            shuffledQuestions = meebits.sort(() => Math.random() - .5);
            break;
        case 'sandbox':
            shuffledQuestions = sandbox.sort(() => Math.random() - .5);
            break;
        case 'wow':
            shuffledQuestions = wow.sort(() => Math.random() - .5);
            break;
        default:
            shuffledQuestions = {};
            break;
    }
    
    return (
        <QuizScreen retry={retry} shuffledQuestions={shuffledQuestions} />
    );
}

export default QuizShuffleScreen;