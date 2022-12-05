import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverType } from './manga-cover-type.enum';
import { NestedEnumMangaCoverTypeWithAggregatesFilter } from './nested-enum-manga-cover-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaCoverTypeFilter } from './nested-enum-manga-cover-type-filter.input';

@InputType()
export class EnumMangaCoverTypeWithAggregatesFilter {

    @Field(() => MangaCoverType, {nullable:true})
    equals?: keyof typeof MangaCoverType;

    @Field(() => [MangaCoverType], {nullable:true})
    in?: Array<keyof typeof MangaCoverType>;

    @Field(() => [MangaCoverType], {nullable:true})
    notIn?: Array<keyof typeof MangaCoverType>;

    @Field(() => NestedEnumMangaCoverTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaCoverTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaCoverTypeFilter, {nullable:true})
    _min?: NestedEnumMangaCoverTypeFilter;

    @Field(() => NestedEnumMangaCoverTypeFilter, {nullable:true})
    _max?: NestedEnumMangaCoverTypeFilter;
}
