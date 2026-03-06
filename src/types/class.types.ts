import {Howl} from 'howler' //36.8k (gzipped: 10k)
 import type { IPlayerState } from './player.type';
import type { ITrack } from './music.types';

export class SpotifyPlayer {
    private audio: Howl | null = null;
    private state: IPlayerState;


    constructor(){
        this.state = {
            currrentTrack: null,
            queue: [],
            history: [],
            isPlaying: false,
            volume: 0.7,
            currentTime: 0,
            repeatMode: 'off',
            isShuffling: false
        }
    }

    play(track?: ITrack): void{
        if (track){
            this.loadTrack(track);
        }
        this.audio?.play();
        this.state.isPlaying = true;
    }
    
    loadTrack(track: ITrack) {
        this.audio = new Howl({
            src: [track.audioUrl],
            volume: this.state.volume
        });

    }

    seek(time: number): void{
        this.audio?.seek(time);
    }

}