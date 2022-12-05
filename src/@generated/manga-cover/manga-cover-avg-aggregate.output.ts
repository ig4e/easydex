import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MangaCoverAvgAggregate {

    @Field(() => Float, {nullable:true})
    volume?: number;

    @Field(() => Float, {nullable:true})
    version?: number;
}
