import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';
import { NestedEnumOriginalLanguageTypeWithAggregatesFilter } from './nested-enum-original-language-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOriginalLanguageTypeFilter } from './nested-enum-original-language-type-filter.input';

@InputType()
export class EnumOriginalLanguageTypeWithAggregatesFilter {

    @Field(() => OriginalLanguageType, {nullable:true})
    equals?: keyof typeof OriginalLanguageType;

    @Field(() => [OriginalLanguageType], {nullable:true})
    in?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => [OriginalLanguageType], {nullable:true})
    notIn?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => NestedEnumOriginalLanguageTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOriginalLanguageTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOriginalLanguageTypeFilter, {nullable:true})
    _min?: NestedEnumOriginalLanguageTypeFilter;

    @Field(() => NestedEnumOriginalLanguageTypeFilter, {nullable:true})
    _max?: NestedEnumOriginalLanguageTypeFilter;
}
