import { registerEnumType } from '@nestjs/graphql';

export enum MangaContentRating {
    SAFE = "SAFE",
    SUGGESTIVE = "SUGGESTIVE",
    EROTICA = "EROTICA",
    PORNOGRAPHIC = "PORNOGRAPHIC"
}


registerEnumType(MangaContentRating, { name: 'MangaContentRating', description: undefined })
