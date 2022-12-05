import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaType } from './manga-type.enum';
import { NestedEnumMangaTypeWithAggregatesFilter } from './nested-enum-manga-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaTypeFilter } from './nested-enum-manga-type-filter.input';

@InputType()
export class EnumMangaTypeWithAggregatesFilter {

    @Field(() => MangaType, {nullable:true})
    equals?: keyof typeof MangaType;

    @Field(() => [MangaType], {nullable:true})
    in?: Array<keyof typeof MangaType>;

    @Field(() => [MangaType], {nullable:true})
    notIn?: Array<keyof typeof MangaType>;

    @Field(() => NestedEnumMangaTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaTypeFilter, {nullable:true})
    _min?: NestedEnumMangaTypeFilter;

    @Field(() => NestedEnumMangaTypeFilter, {nullable:true})
    _max?: NestedEnumMangaTypeFilter;
}
