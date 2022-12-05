import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';
import { NestedEnumMangaTagGroupTypeWithAggregatesFilter } from './nested-enum-manga-tag-group-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaTagGroupTypeFilter } from './nested-enum-manga-tag-group-type-filter.input';

@InputType()
export class EnumMangaTagGroupTypeWithAggregatesFilter {

    @Field(() => MangaTagGroupType, {nullable:true})
    equals?: keyof typeof MangaTagGroupType;

    @Field(() => [MangaTagGroupType], {nullable:true})
    in?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => [MangaTagGroupType], {nullable:true})
    notIn?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => NestedEnumMangaTagGroupTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaTagGroupTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaTagGroupTypeFilter, {nullable:true})
    _min?: NestedEnumMangaTagGroupTypeFilter;

    @Field(() => NestedEnumMangaTagGroupTypeFilter, {nullable:true})
    _max?: NestedEnumMangaTagGroupTypeFilter;
}
