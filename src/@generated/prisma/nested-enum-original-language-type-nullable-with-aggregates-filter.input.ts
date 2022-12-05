import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumOriginalLanguageTypeNullableFilter } from './nested-enum-original-language-type-nullable-filter.input';

@InputType()
export class NestedEnumOriginalLanguageTypeNullableWithAggregatesFilter {

    @Field(() => OriginalLanguageType, {nullable:true})
    equals?: keyof typeof OriginalLanguageType;

    @Field(() => [OriginalLanguageType], {nullable:true})
    in?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => [OriginalLanguageType], {nullable:true})
    notIn?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => NestedEnumOriginalLanguageTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOriginalLanguageTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumOriginalLanguageTypeNullableFilter, {nullable:true})
    _min?: NestedEnumOriginalLanguageTypeNullableFilter;

    @Field(() => NestedEnumOriginalLanguageTypeNullableFilter, {nullable:true})
    _max?: NestedEnumOriginalLanguageTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
