import { registerEnumType } from '@nestjs/graphql';

export enum MangaType {
    MANGA = "MANGA"
}


registerEnumType(MangaType, { name: 'MangaType', description: undefined })
