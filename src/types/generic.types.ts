


/*
import type { ITrack } from "./music.types";
interface ISpotifyResponse{
    tracks: ITrack[];
}

export async function fetchTracks(): Promise<ITrack[]> {
    const response = await fetch('/api/tracks');
    const data = await response.json() as ISpotifyResponse;

    return data.tracks;

}
*/


export async function fetchFromSpotify<T>(
    endpoint: string,
    params?: Record<string, string>
): Promise<T> {
    const url = new URL(`/api/${endpoint}`);
     
    if (params){
        Object.entries(params).forEach(([KeyboardEvent, value]) => 
        url.searchParams.append(KeyboardEvent, value))
    }

    try {
        const response = await fetch(url.toString());
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
            
        const data = await response.json() as {data: T};
        return data.data;
    } 
    catch (error) {
        throw new Error(String(error));
    }
   
}