
import type { ITrack } from "./music.types";
import type { TAudioVisualizerBar } from "./player.type";

export const recentlyPlayed: ITrack[] = [];
export const topTracks: ReadonlyArray<ITrack> = [];

export const bars: TAudioVisualizerBar[] = [
    [60, 0.8],
    [120, 0.6],
    [180, 0.9],
    [240, 0.4],
    [300, 0.7],
    [360, 0.5],
    [60, 0.8],
    [60, 0.8],
];