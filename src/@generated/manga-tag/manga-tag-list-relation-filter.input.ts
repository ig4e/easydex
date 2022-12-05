import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagWhereInput } from './manga-tag-where.input';

@InputType()
export class MangaTagListRelationFilter {

    @Field(() => MangaTagWhereInput, {nullable:true})
    every?: MangaTagWhereInput;

    @Field(() => MangaTagWhereInput, {nullable:true})
    some?: MangaTagWhereInput;

    @Field(() => MangaTagWhereInput, {nullable:true})
    none?: MangaTagWhereInput;
}
