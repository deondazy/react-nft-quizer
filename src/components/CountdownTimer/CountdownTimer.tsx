import {useState, useEffect} from 'react';
import {getRemainingTimeUntilTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00'
}

function CountdownTimer({countdownTimestampMs}: {countdownTimestampMs: number}) {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown: number) {
        setRemainingTime(getRemainingTimeUntilTimestamp(countdown));
    }

    return (
        <div className="countdown-timer">
            <span>{remainingTime.hours}:</span>
            <span>{remainingTime.minutes}:</span>
            <span>{remainingTime.seconds}</span>
        </div>
    )
}

export default CountdownTimer;