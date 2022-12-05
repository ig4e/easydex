import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaSumAggregate {

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => Int, {nullable:true})
    version?: number;
}
