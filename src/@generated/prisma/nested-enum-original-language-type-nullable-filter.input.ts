import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';

@InputType()
export class NestedEnumOriginalLanguageTypeNullableFilter {

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
