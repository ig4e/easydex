import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    dexId!: number;

    @Field(() => Int, {nullable:false})
    altTitles!: number;

    @Field(() => Int, {nullable:false})
    originalLanguage!: number;

    @Field(() => Int, {nullable:false})
    publicationDemographic!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    releaseYear!: number;

    @Field(() => Int, {nullable:false})
    contentRating!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Int, {nullable:false})
    mcreatedAt!: number;

    @Field(() => Int, {nullable:false})
    mupdatedAt!: number;

    @Field(() => Int, {nullable:false})
    eupdatedAt!: number;

    @Field(() => Int, {nullable:false})
    ecreatedAt!: number;

    @Field(() => Int, {nullable:false})
    tagIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
