import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MangaTagNameCompositeFilter } from '../prisma/manga-tag-name-composite-filter.input';
import { EnumMangaTagGroupTypeFilter } from '../prisma/enum-manga-tag-group-type-filter.input';
import { MangaListRelationFilter } from '../manga/manga-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class MangaTagWhereInput {

    @Field(() => [MangaTagWhereInput], {nullable:true})
    AND?: Array<MangaTagWhereInput>;

    @Field(() => [MangaTagWhereInput], {nullable:true})
    OR?: Array<MangaTagWhereInput>;

    @Field(() => [MangaTagWhereInput], {nullable:true})
    NOT?: Array<MangaTagWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dexId?: StringFilter;

    @Field(() => MangaTagNameCompositeFilter, {nullable:true})
    name?: MangaTagNameCompositeFilter;

    @Field(() => EnumMangaTagGroupTypeFilter, {nullable:true})
    group?: EnumMangaTagGroupTypeFilter;

    @Field(() => MangaListRelationFilter, {nullable:true})
    Manga?: MangaListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    mangaIDs?: StringNullableListFilter;
}
