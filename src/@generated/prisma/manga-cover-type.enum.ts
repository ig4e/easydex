import { registerEnumType } from '@nestjs/graphql';

export enum MangaCoverType {
    COVER_ART = "COVER_ART"
}


registerEnumType(MangaCoverType, { name: 'MangaCoverType', description: undefined })
