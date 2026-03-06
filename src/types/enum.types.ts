/*enum EnumAudioQuality{
    LOW = '96',
    MEDIUM = '160',
    HIGHT = '320',
    LOSSLESS = 'FLAC',
}*/

/** Блок альтернативного варианта трансляции массива как enum с возможностью присвоения и с помощью значения: Инициализация  */
export const AudioQuality = {
    LOW: '96',
    MEDIUM: '160',
    HIGHT: '320',
    LOSSLESS: 'FLAC',
} as const;

/** Блок альтернативного варианта трансляции массива как enum  с возможностью присвоения и с помощью значения: для экспорта как тип  */
export type AudioQuality = typeof AudioQuality[keyof typeof AudioQuality];

//const DEFAULT_AUDIO_QUALITY = AudioQuality.HIGHT;