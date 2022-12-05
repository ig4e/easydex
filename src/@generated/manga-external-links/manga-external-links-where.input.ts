import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class MangaExternalLinksWhereInput {

    @Field(() => [MangaExternalLinksWhereInput], {nullable:true})
    AND?: Array<MangaExternalLinksWhereInput>;

    @Field(() => [MangaExternalLinksWhereInput], {nullable:true})
    OR?: Array<MangaExternalLinksWhereInput>;

    @Field(() => [MangaExternalLinksWhereInput], {nullable:true})
    NOT?: Array<MangaExternalLinksWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    nu?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    al?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ap?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bw?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    kt?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mu?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    amz?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cdj?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ebj?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mal?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    raw?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engtl?: StringNullableFilter;
}
