import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaCoverType } from '../prisma/manga-cover-type.enum';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MangaCoverCountAggregate } from './manga-cover-count-aggregate.output';
import { MangaCoverAvgAggregate } from './manga-cover-avg-aggregate.output';
import { MangaCoverSumAggregate } from './manga-cover-sum-aggregate.output';
import { MangaCoverMinAggregate } from './manga-cover-min-aggregate.output';
import { MangaCoverMaxAggregate } from './manga-cover-max-aggregate.output';

@ObjectType()
export class MangaCoverGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverType, {nullable:false})
    type!: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:false})
    locale!: keyof typeof OriginalLanguageType;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => Float, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => String, {nullable:false})
    mangaId!: string;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    eupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    ecreatedAt!: Date | string;

    @Field(() => MangaCoverCountAggregate, {nullable:true})
    _count?: MangaCoverCountAggregate;

    @Field(() => MangaCoverAvgAggregate, {nullable:true})
    _avg?: MangaCoverAvgAggregate;

    @Field(() => MangaCoverSumAggregate, {nullable:true})
    _sum?: MangaCoverSumAggregate;

    @Field(() => MangaCoverMinAggregate, {nullable:true})
    _min?: MangaCoverMinAggregate;

    @Field(() => MangaCoverMaxAggregate, {nullable:true})
    _max?: MangaCoverMaxAggregate;
}
