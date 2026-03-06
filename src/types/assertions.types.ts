import type { ITrack } from "./music.types";

/** Get singleton id = 'audio'  */
export const audioEleemnt = document.getElementById('audio') as HTMLAudioElement | null;
/** Get singleton class = 'progress'  */
export const progressBar = document.querySelector('.progress') as HTMLDivElement | null;


