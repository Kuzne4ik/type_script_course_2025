import type { IBase, ITrack } from "./music.types";

// Omit исключить поля по именам для отправки
// function updateTrack(trackId: string, data: Omit<ITrack, 'id' | 'createdAt' | 'updatedAt'>){

// Omit исключить поля по интерфейсу для отправки
//export function updateTrack(trackId: string, data: Omit<ITrack, keyof IBase>): void{

// Omit исключить поля по интерфейсу для отправки + все остальные поля не ОБЯЗАТЕЛЬНЫЕ частичное обновление
// export function updateTrack(trackId: string, data: Partial<Omit<ITrack, keyof IBase>>): void{

export function updateTrack(trackId: string, data: Partial<Omit<ITrack, keyof IBase>>): void{
    console.log('Updating track: ', trackId, data);
}

// Пример: все поля interface НЕ обязательные
interface IUser {
    name?: string,
    age?: number,
    city?: string
}

// Пример: сделать все поля interface IUser обязательные
export type UserProfile = Required<IUser>;

// Пример: взять только отдельные поля type UserProfile 
export type MainUserProfile = Pick<UserProfile, 'name' | 'age'>;

// Пример: Тип для строгости в назаначении значений для Dictionary
type UserDictionary = Record<string, string>

// Пример для UserDictionary
export const userDict: UserDictionary = {
    man: 'Мужчина',
    literally: 'Буквально',
    obviously: 'Очевидно'
}

// Пример: указать конкретный тип для функции `updateTrack` из библиотеки, если приходит нечеткая типизация
export type UpdateTrackResponse = ReturnType<typeof updateTrack>

// Пример: указать конкретные парметры для функции `updateTrack` ??? 
export type UpdateTrackParams = Parameters<typeof updateTrack>
