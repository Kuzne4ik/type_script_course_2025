import type { IArtist, IBase, ITrack } from "./music.types";

export interface IPlaylist extends IBase{
    name: string,
    description?: string,
    tracks: ITrack[],
    coverImage: string,
    isPublic: boolean,
    followers: number,
    owner: IArtist

}