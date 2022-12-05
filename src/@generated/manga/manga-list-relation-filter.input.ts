import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';

@InputType()
export class MangaListRelationFilter {

    @Field(() => MangaWhereInput, {nullable:true})
    every?: MangaWhereInput;

    @Field(() => MangaWhereInput, {nullable:true})
    some?: MangaWhereInput;

    @Field(() => MangaWhereInput, {nullable:true})
    none?: MangaWhereInput;
}
