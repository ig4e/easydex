import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from './manga-cover-where.input';

@InputType()
export class MangaCoverListRelationFilter {

    @Field(() => MangaCoverWhereInput, {nullable:true})
    every?: MangaCoverWhereInput;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    some?: MangaCoverWhereInput;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    none?: MangaCoverWhereInput;
}
