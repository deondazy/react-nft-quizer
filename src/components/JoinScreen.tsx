interface JoinScreenProps {
    startQuiz: (whichQuiz: string) => void;
    isAzukiStarted: boolean;
    isBaycStarted: boolean;
    isCryptoPunksStarted: boolean;
    isDoodlesStarted: boolean;
    isMeebitsStarted: boolean;
    isSandboxStarted: boolean;
    isWowStarted: boolean;
}

const doNada = () => {
    return;
};

function JoinScreen({startQuiz, isAzukiStarted, isBaycStarted, isCryptoPunksStarted, isDoodlesStarted, isMeebitsStarted, isSandboxStarted, isWowStarted}: JoinScreenProps) {
    return (
        <div className="join-screen">
                <p className="title">Choose an NFT from the list below, answer 10 trivia questions and stand a chance to win an NFT!</p>

            <div className="join-cards">
                <div className="join-card">
                    <div className={`join-button bg ${isAzukiStarted}`} style={styles.azuki} onClick={isAzukiStarted ? () => doNada() : () => startQuiz('azuki')}></div>
                    <p>Azuki</p>
                </div>
                <div className="join-card">
                    <div className="join-button bg" style={styles.bayc} onClick={() => startQuiz('bayc')}></div>
                    <p>Bored Ape Yacht Club</p>
                </div>
                <div className="join-card">
                    <div className={`join-button bg ${isCryptoPunksStarted}`} style={styles.cryptoPunks} onClick={isCryptoPunksStarted ? () => doNada() : () => startQuiz('cryptoPunks')}></div>
                    <p>Crypto Punks</p>
                </div>
                <div className="join-card">
                    <div className="join-button bg" style={styles.doodles} onClick={() => startQuiz('doodles')}></div>
                    <p>Doodles</p>
                </div>
                <div className="join-card">
                    <div className="join-button bg" style={styles.meebits} onClick={() => startQuiz('meebits')}></div>
                    <p>Meebits</p>
                </div>
                <div className="join-card">
                    <div className="join-button bg" style={styles.sandbox} onClick={() => startQuiz('sandbox')}></div>
                    <p>The Sandobx</p>
                </div>
                <div className="join-card">
                    <div className="join-button bg" style={styles.wow} onClick={() => startQuiz('wow')}></div>
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