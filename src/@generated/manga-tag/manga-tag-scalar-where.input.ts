import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMangaTagGroupTypeFilter } from '../prisma/enum-manga-tag-group-type-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class MangaTagScalarWhereInput {

    @Field(() => [MangaTagScalarWhereInput], {nullable:true})
    AND?: Array<MangaTagScalarWhereInput>;

    @Field(() => [MangaTagScalarWhereInput], {nullable:true})
    OR?: Array<MangaTagScalarWhereInput>;

    @Field(() => [MangaTagScalarWhereInput], {nullable:true})
    NOT?: Array<MangaTagScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dexId?: StringFilter;

    @Field(() => EnumMangaTagGroupTypeFilter, {nullable:true})
    group?: EnumMangaTagGroupTypeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    mangaIDs?: StringNullableListFilter;
}
