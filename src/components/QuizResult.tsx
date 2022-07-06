function claimReward() {
    return alert("Reward");
}

function QuizResult({result, retry}: {result: any, retry: any}) {
    return (
        <div className="result-screen">
            <h2>Result: <strong>{result.percentage}%</strong></h2>
            <p>Selected <strong>{result.correct}</strong> correct options out of <strong>{result.total}</strong> questions.</p>

            {result.correct < 7 ? (
                <button onClick={retry}>Retry</button>
            ) : (
                <>
                <p><strong>Congratulations! You have passed the quiz!</strong></p>
                <button onClick={claimReward}>Claim reward</button>
                </>
            )}
        </div>
    );
}

export default QuizResult;