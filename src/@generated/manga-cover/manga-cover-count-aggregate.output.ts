import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCoverCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    dexId!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    locale!: number;

    @Field(() => Int, {nullable:false})
    fileName!: number;

    @Field(() => Int, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Int, {nullable:false})
    mangaId!: number;

    @Field(() => Int, {nullable:false})
    mcreatedAt!: number;

    @Field(() => Int, {nullable:false})
    mupdatedAt!: number;

    @Field(() => Int, {nullable:false})
    eupdatedAt!: number;

    @Field(() => Int, {nullable:false})
    ecreatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
