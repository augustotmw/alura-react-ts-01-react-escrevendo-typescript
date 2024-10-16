export function convertMilisecondsToString(time: number): string {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const addZero = (num: number): string => (num < 10 ? '0' + num : num.toString());

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

export function convertStringToMiliseconds(time: string): number {
    const [hours = '00', minutes = '00', seconds = '00'] = time.split(':');

    return (Number(hours) * 3600000) + (Number(minutes) * 60000) + (Number(seconds) * 1000);
}
