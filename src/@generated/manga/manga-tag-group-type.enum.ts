import { registerEnumType } from '@nestjs/graphql';

export enum MangaTagGroupType {
    CONTENT = "CONTENT",
    FORMAT = "FORMAT",
    GENRE = "GENRE",
    THEME = "THEME"
}


registerEnumType(MangaTagGroupType, { name: 'MangaTagGroupType', description: undefined })
