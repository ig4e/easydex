import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';
import { NestedEnumOriginalLanguageTypeNullableFilter } from './nested-enum-original-language-type-nullable-filter.input';

@InputType()
export class EnumOriginalLanguageTypeNullableFilter {

    @Field(() => OriginalLanguageType, {nullable:true})
    equals?: keyof typeof OriginalLanguageType;

    @Field(() => [OriginalLanguageType], {nullable:true})
    in?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => [OriginalLanguageType], {nullable:true})
    notIn?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => NestedEnumOriginalLanguageTypeNullableFilter, {nullable:true})
    not?: NestedEnumOriginalLanguageTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
