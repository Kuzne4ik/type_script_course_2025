import type { ITrack } from "./music.types";

// Узнать тип U у единичного объекта массива T. Если тип T это массив иначе ответ never
export type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

// Пример: Узнать тип у единичного объекта массива. Ответ: ITrack
//type TrackType = ExtractArrayType<ITrack[]>;


// Взять у типа все поля и сделать их необязательными. 
// Чтобы скормить в метод 
export type Optional<T> = {
    [K in keyof T]?: T[K]
}

// Взять у типа все поля и сделать их null даже если они обязательные
// Чтобы скормить в метод 
export type Nullable<T> = {
    [K in keyof T]?: T[K] | null
}

// Пример: взять у  интерфейса ITrack каждое поле и сделать их необязательными
export type TrackDraft = Optional<ITrack>;

// Взять каждое поле типа и сделать function get<название поля с большой буквы>  
export type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
}