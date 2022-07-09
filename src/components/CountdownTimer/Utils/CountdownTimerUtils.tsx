import dayjs from 'dayjs';

export function getRemainingTimeUntilTimestamp(timestampMs: number): {hours: string, minutes: string, seconds: string} {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    if (timestampDayjs.isBefore(nowDayjs)) {
        return {
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs): string {
    const seconds = timestampDayjs.diff(nowDayjs, 'second') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs): string {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs): string {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function padWithZeros(number: number, minLength: number): string {
    const numberString = number.toString();

    if (numberString.length >= minLength) return numberString;

    return '0'.repeat(minLength - numberString.length) + numberString;
}