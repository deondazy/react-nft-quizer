import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer/CountdownTimer';
interface JoinScreenProps {
    startQuiz: (whichQuiz: string) => void;
    nftData: any;
}

function JoinScreen({startQuiz, nftData}: JoinScreenProps) {

    return (
        <div className="join-screen">
                <p className="title">
                It's a bear market but NFT is not dead. We are an elite group of young NFT whales looking to improve NFT awareness around the world through quality Education.<br /><br />
                
                To advertise your collection, write to <a href="mailto:apply@nftquizer.com">apply@nftquizer.com</a> <br/><br />
                    
                Choose an NFT from the list below, answer 10 trivia questions and stand a chance to win an NFT!
                <br/><br/>
                <Link to="/tutorial">Tutorial - Learn how NFTQuizer works</Link>
                </p>

            <div className="join-cards">
                <div className="join-card">
                    <div className={`join-button bg ${nftData.azuki.isStarted}`} style={styles.azuki} onClick={nftData.azuki.isStarted ? () => {return} : () => startQuiz('azuki')}></div>
                    {nftData.azuki.isStarted && <CountdownTimer countdownTimestampMs={nftData.azuki.timer} />}
                    <p>Azuki</p>
                </div>

                <div className="join-card">
                    <div className={`join-button bg ${nftData.bayc.isStarted}`} style={styles.bayc} onClick={nftData.bayc.isStarted ? () => {return} : () => startQuiz('bayc')}></div>
                    {nftData.bayc.isStarted && <CountdownTimer countdownTimestampMs={nftData.bayc.timer} />}
                    <p>Bored Ape Yacht Club</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${nftData.cryptoPunks.isStarted}`} style={styles.cryptoPunks} onClick={nftData.cryptoPunks.isStarted ? () => {return} : () => startQuiz('cryptoPunks')}></div>
                    {nftData.cryptoPunks.isStarted && <CountdownTimer countdownTimestampMs={nftData.cryptoPunks.timer} />}
                    <p>Crypto Punks</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${nftData.doodles.isStarted}`} style={styles.doodles} onClick={nftData.doodles.isStarted ? () => {return} : () => startQuiz('doodles')}></div>
                    {nftData.doodles.isStarted && <CountdownTimer countdownTimestampMs={nftData.doodles.timer} />}
                    <p>Doodles</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${nftData.meebits.isStarted}`} style={styles.meebits} onClick={nftData.meebits.isStarted ? () => {return} : () => startQuiz('meebits')}></div>
                    {nftData.meebits.isStarted && <CountdownTimer countdownTimestampMs={nftData.meebits.timer} />}
                    <p>Meebits</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${nftData.sandbox.isStarted}`} style={styles.sandbox} onClick={nftData.sandbox.isStarted ? () => {return} : () => startQuiz('sandbox')}></div>
                    {nftData.sandbox.isStarted && <CountdownTimer countdownTimestampMs={nftData.sandbox.timer} />}
                    <p>The Sandobx</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${nftData.wow.isStarted}`} style={styles.wow} onClick={nftData.wow.isStarted ? () => {return} : () => startQuiz('wow')}></div>
                    {nftData.wow.isStarted && <CountdownTimer countdownTimestampMs={nftData.wow.timer} />}
                    <p>World of Women</p>
                </div>
            </div>
            {/* <button onClick={start}>Start</button> */}
        </div>
    )
}

const styles = {
    azuki: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/azuki.png)`
    },
    bayc: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/bayc.png)`
    },
    cryptoPunks: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/cryptopunks.jpg)`
    },
    doodles: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/doodles.png)`
    },
    meebits: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/meetbits.svg)`
    },
    sandbox: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/sandbox.svg)`
    },
    wow: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/nft/wow.jpg)`
    }
} as const;

export default JoinScreen;