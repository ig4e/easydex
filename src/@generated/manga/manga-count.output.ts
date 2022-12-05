import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCount {

    @Field(() => Int, {nullable:false})
    covers?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;
}
