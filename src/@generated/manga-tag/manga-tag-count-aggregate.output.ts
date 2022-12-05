import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaTagCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    dexId!: number;

    @Field(() => Int, {nullable:false})
    group!: number;

    @Field(() => Int, {nullable:false})
    mangaIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
