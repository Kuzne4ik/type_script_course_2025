import type { IArtist, ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";

export function spotifyApi(endpoint: 'track', id: string): Promise<ITrack>;

export function spotifyApi(endpoint: 'playlist', id: string): Promise<IPlaylist>;

export function spotifyApi(endpoint: 'artist', id: string): Promise<IArtist>;

export function spotifyApi(endpoint: string, id: string): Promise<unknown>{
    return fetch(`https://api.spotify.com/v1/${endpoint}s/${id}`).then(res => res.json());
}

