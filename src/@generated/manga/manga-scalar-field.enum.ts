import { registerEnumType } from '@nestjs/graphql';

export enum MangaScalarFieldEnum {
    id = "id",
    dexId = "dexId",
    altTitles = "altTitles",
    originalLanguage = "originalLanguage",
    publicationDemographic = "publicationDemographic",
    status = "status",
    releaseYear = "releaseYear",
    contentRating = "contentRating",
    type = "type",
    version = "version",
    mcreatedAt = "mcreatedAt",
    mupdatedAt = "mupdatedAt",
    eupdatedAt = "eupdatedAt",
    ecreatedAt = "ecreatedAt",
    tagIDs = "tagIDs"
}


registerEnumType(MangaScalarFieldEnum, { name: 'MangaScalarFieldEnum', description: undefined })
