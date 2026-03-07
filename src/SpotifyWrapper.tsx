import { type ReactNode } from "react"
/*
import { useRef, useState, type ReactNode } from "react"
import type { IArtist, ITrack } from "./types/music.types";
*/

export function SpotifyWrapper({children}: { children: ReactNode}){

    /*
    const [currenTrack, setCurrentTrack] = useState<ITrack | null>(null);

    const [queue, setQueue] = useState<ITrack[]>([]);

    const [currentArtist, setCurrentArtist] = useState<IArtist>( {} as IArtist);

    
    const audioRef = useRef<HTMLAudioElement>(null);

    */
    
    return <div>{children}</div>;
}