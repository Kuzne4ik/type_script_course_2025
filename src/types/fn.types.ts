import type { ITrack } from "./music.types";

type PlayFuncion =  (track: string) => void;

export const play: PlayFuncion = (track) => {
    console.log(`Playing track: ${track}`);
    return null;
}

export function setVolume(level: number): void{
    if (level < 0 || level > 100)
        throw new Error("Volume level must be between 0 and 100");

    console.log(`Setting volume to: ${level}`);
}

export function addToQueue(track: ITrack, position: number = 1): void{
    console.log(`Adding track: ${track.title} to positon: ${position} in the queue`);
}