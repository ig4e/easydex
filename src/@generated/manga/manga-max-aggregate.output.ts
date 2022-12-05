import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { MangaPublicationDemographicType } from '../prisma/manga-publication-demographic-type.enum';
import { MangaStatus } from '../prisma/manga-status.enum';
import { Int } from '@nestjs/graphql';
import { MangaContentRating } from './manga-content-rating.enum';
import { MangaType } from '../prisma/manga-type.enum';

@ObjectType()
export class MangaMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    dexId?: string;

    @Field(() => OriginalLanguageType, {nullable:true})
    originalLanguage?: keyof typeof OriginalLanguageType;

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    publicationDemographic?: keyof typeof MangaPublicationDemographicType;

    @Field(() => MangaStatus, {nullable:true})
    status?: keyof typeof MangaStatus;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => MangaContentRating, {nullable:true})
    contentRating?: keyof typeof MangaContentRating;

    @Field(() => MangaType, {nullable:true})
    type?: keyof typeof MangaType;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => Date, {nullable:true})
    mcreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    mupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    eupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    ecreatedAt?: Date | string;
}
