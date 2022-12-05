import { registerEnumType } from '@nestjs/graphql';

export enum MangaPublicationDemographicType {
    SHOUNEN = "SHOUNEN",
    SHOUJO = "SHOUJO",
    JOSEI = "JOSEI",
    SEINEN = "SEINEN"
}


registerEnumType(MangaPublicationDemographicType, { name: 'MangaPublicationDemographicType', description: undefined })
