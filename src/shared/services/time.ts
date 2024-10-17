export function convertMilisecondsToString(time: number): string {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${
        String(hours).padStart(2, '0')
    }:${
        String(minutes).padStart(2, '0')
    }:${
        String(seconds).padStart(2, '0')
    }`;
}

export function convertStringToMiliseconds(time: string): number {
    const [hours = '00', minutes = '00', seconds = '00'] = time.split(':');

    return (Number(hours) * 3600000) + (Number(minutes) * 60000) + (Number(seconds) * 1000);
}
