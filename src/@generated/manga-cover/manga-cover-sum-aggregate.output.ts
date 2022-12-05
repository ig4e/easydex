import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCoverSumAggregate {

    @Field(() => Float, {nullable:true})
    volume?: number;

    @Field(() => Int, {nullable:true})
    version?: number;
}
