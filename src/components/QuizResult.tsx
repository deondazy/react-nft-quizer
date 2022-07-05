function QuizResult({result, retry}: {result: any, retry: any}) {
    return (
        <div className="result-screen">
            <h2>Result: <strong>{result.percentage}%</strong></h2>
            <p>Selected <strong>{result.correct}</strong> correct options out of <strong>{result.total}</strong> questions.</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default QuizResult;