/**
 * 
 * @param seconds The duration of the video
 * @returns An array of timestamps corresponding to when we should ask the user questions.
 * 
 * Calculates timestamps for when we should ask a user a question, based on the length of
 * the video.
 */
export const calculateQuestionTimestamps = (seconds: number): number[] => {
    const numberOfMinutes = Math.ceil(seconds / 60);
    let numberOfQuestions;

    if (numberOfMinutes < 5) {
        numberOfQuestions = 3;
    } else if (numberOfMinutes < 10) {
        numberOfQuestions = 5;
    } else if (numberOfMinutes < 30) {
        numberOfQuestions = Math.floor(numberOfMinutes / 3);
    } else {
        numberOfQuestions = Math.floor(numberOfMinutes / 10);
    }

    const questionTimestamps = [];
    for (let i = 1; i <= numberOfQuestions; i++) {
        const gapInSeconds = seconds / numberOfQuestions;
        let timestampIsInvalid = true;

        while (timestampIsInvalid) {
            // We can offset each question by up to 10% of the length of the video
            const secondsOffsetMagnitude = Math.random() * (seconds / 10);
            const isOffsetNegative = Math.random() <= .5;
            const secondsOffset = isOffsetNegative ? secondsOffsetMagnitude * -1 : secondsOffsetMagnitude;
            const timestamp = Math.floor((i * gapInSeconds) + secondsOffset);

            // A timestamp is only valid if it isn't beyond the final 5% of the video's length
            // and it is not less than 0
            if (timestamp < seconds - (seconds / 20) || timestamp < 0) {
                timestampIsInvalid = false;
                questionTimestamps.push(timestamp);
            }
        }
    }

    return questionTimestamps;
}

export const generateQuestionCode = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const secondsToReadableTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const leftoverSecondsFromHours = seconds - (hours * 3600);
    const minutes = Math.floor(leftoverSecondsFromHours / 60);
    const leftOverSeconds = leftoverSecondsFromHours - (minutes * 60);

    const minutesReadable = minutes < 10 ? `0${minutes}` : minutes;
    const secondsReadable = leftOverSeconds < 10 ? `0${leftOverSeconds}` : leftOverSeconds;

    return `${hours}:${minutesReadable}:${secondsReadable}`;
}

export const secondsToTimeString = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const leftoverSecondsFromHours = seconds - (hours * 3600);
    const minutes = Math.floor(leftoverSecondsFromHours / 60);
    const leftOverSeconds = leftoverSecondsFromHours - (minutes * 60);

    let timeString = `${leftOverSeconds} seconds`;
    timeString = minutes ? `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}, ${timeString}` : timeString;
    timeString = hours ? `${hours} ${hours === 1 ? 'hour' : 'hours'}, ${timeString}` : timeString;

    return timeString;
}

export const createVideoInstance = async (videoId: number, paymentUsername: string) => {
    return await fetch(`/api/videos/${videoId}/instances`, {
            method: 'POST',
            body: JSON.stringify({
                payment_username: paymentUsername
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
}

export const getVideo = async (videoId: number) => {
    return await fetch(`/api/videos/${videoId}`)
        .then((res) => res.json())
}

export const getVideoInstance = async (videoId: number, code: string) => {
    return await fetch(`/api/videos/${videoId}/instances/${code}`)
        .then((res) => res.json())
}

export const getVideoInstanceQuestions = (videoId: string, instanceId: string, after: number, before: number) => {
    return fetch(`/api/videos/${videoId}/instances/${instanceId}/questions?after=${after}&before=${before}`)
        .then(res => res.json())
}

export const submitQuestionAnswer = (videoId: string, instanceId: string, questionId: string, answer: string) => {
    return fetch(`/api/videos/${videoId}/instances/${instanceId}/questions/${questionId}`, {
            method: 'POST',
            body: JSON.stringify({answer}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
}