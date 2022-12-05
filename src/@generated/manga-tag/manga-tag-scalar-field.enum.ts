import { registerEnumType } from '@nestjs/graphql';

export enum MangaTagScalarFieldEnum {
    id = "id",
    dexId = "dexId",
    group = "group",
    mangaIDs = "mangaIDs"
}


registerEnumType(MangaTagScalarFieldEnum, { name: 'MangaTagScalarFieldEnum', description: undefined })
