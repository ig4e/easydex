import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMangaTagGroupTypeWithAggregatesFilter } from '../prisma/enum-manga-tag-group-type-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class MangaTagScalarWhereWithAggregatesInput {

    @Field(() => [MangaTagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MangaTagScalarWhereWithAggregatesInput>;

    @Field(() => [MangaTagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MangaTagScalarWhereWithAggregatesInput>;

    @Field(() => [MangaTagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MangaTagScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dexId?: StringWithAggregatesFilter;

    @Field(() => EnumMangaTagGroupTypeWithAggregatesFilter, {nullable:true})
    group?: EnumMangaTagGroupTypeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    mangaIDs?: StringNullableListFilter;
}
