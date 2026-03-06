import type { ITrack } from "./music.types";

export interface IPlayerState {
    currrentTrack: ITrack | null,
    queue: ITrack[],
    history: ITrack[],
    isPlaying: boolean,
    volume: number,
    currentTime: number,
    repeatMode: 'off' | 'one' | 'all',
    isShuffling: boolean // проигрывать трэки не подряд
}

export type TAudioVisualizerBar = [frequency: number, amplitude: number];

export type TimeFormat = [minutes: number, seconds: number];

/** Преобразовать продолжительность в сек преобразовать в [min, sex] */
export function formatToTimeFormat(duration: number): TimeFormat{
    return [Math.floor(duration/60), duration % 60];
}
