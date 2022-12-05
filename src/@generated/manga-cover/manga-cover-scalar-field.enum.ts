import { registerEnumType } from '@nestjs/graphql';

export enum MangaCoverScalarFieldEnum {
    id = "id",
    dexId = "dexId",
    type = "type",
    locale = "locale",
    fileName = "fileName",
    volume = "volume",
    version = "version",
    mangaId = "mangaId",
    mcreatedAt = "mcreatedAt",
    mupdatedAt = "mupdatedAt",
    eupdatedAt = "eupdatedAt",
    ecreatedAt = "ecreatedAt"
}


registerEnumType(MangaCoverScalarFieldEnum, { name: 'MangaCoverScalarFieldEnum', description: undefined })
