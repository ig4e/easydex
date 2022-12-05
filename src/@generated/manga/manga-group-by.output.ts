import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { MangaPublicationDemographicType } from '../prisma/manga-publication-demographic-type.enum';
import { MangaStatus } from '../prisma/manga-status.enum';
import { Int } from '@nestjs/graphql';
import { MangaContentRating } from './manga-content-rating.enum';
import { MangaType } from '../prisma/manga-type.enum';
import { MangaCountAggregate } from './manga-count-aggregate.output';
import { MangaAvgAggregate } from './manga-avg-aggregate.output';
import { MangaSumAggregate } from './manga-sum-aggregate.output';
import { MangaMinAggregate } from './manga-min-aggregate.output';
import { MangaMaxAggregate } from './manga-max-aggregate.output';

@ObjectType()
export class MangaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => [String], {nullable:true})
    altTitles?: Array<string>;

    @Field(() => OriginalLanguageType, {nullable:true})
    originalLanguage?: keyof typeof OriginalLanguageType;

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    publicationDemographic?: keyof typeof MangaPublicationDemographicType;

    @Field(() => MangaStatus, {nullable:false})
    status!: keyof typeof MangaStatus;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => MangaContentRating, {nullable:true})
    contentRating?: keyof typeof MangaContentRating;

    @Field(() => MangaType, {nullable:false})
    type!: keyof typeof MangaType;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    eupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    ecreatedAt!: Date | string;

    @Field(() => [String], {nullable:true})
    tagIDs?: Array<string>;

    @Field(() => MangaCountAggregate, {nullable:true})
    _count?: MangaCountAggregate;

    @Field(() => MangaAvgAggregate, {nullable:true})
    _avg?: MangaAvgAggregate;

    @Field(() => MangaSumAggregate, {nullable:true})
    _sum?: MangaSumAggregate;

    @Field(() => MangaMinAggregate, {nullable:true})
    _min?: MangaMinAggregate;

    @Field(() => MangaMaxAggregate, {nullable:true})
    _max?: MangaMaxAggregate;
}
