import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MangaAvgAggregate {

    @Field(() => Float, {nullable:true})
    releaseYear?: number;

    @Field(() => Float, {nullable:true})
    version?: number;
}
