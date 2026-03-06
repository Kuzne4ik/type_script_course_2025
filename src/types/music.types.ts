export interface IBase{
    id: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface IArtist extends IBase{
    name: string,
    image: string,
    isVerified: boolean,
}

export interface ITrack extends IBase{
    title: string,
    artist: IArtist,
    audioUrl: string,
}

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';