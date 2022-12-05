import { registerEnumType } from '@nestjs/graphql';

export enum MangaStatus {
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    HIATUS = "HIATUS",
    CANCELLED = "CANCELLED"
}


registerEnumType(MangaStatus, { name: 'MangaStatus', description: undefined })
