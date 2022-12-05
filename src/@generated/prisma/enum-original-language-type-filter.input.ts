import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';
import { NestedEnumOriginalLanguageTypeFilter } from './nested-enum-original-language-type-filter.input';

@InputType()
export class EnumOriginalLanguageTypeFilter {

    @Field(() => OriginalLanguageType, {nullable:true})
    equals?: keyof typeof OriginalLanguageType;

    @Field(() => [OriginalLanguageType], {nullable:true})
    in?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => [OriginalLanguageType], {nullable:true})
    notIn?: Array<keyof typeof OriginalLanguageType>;

    @Field(() => NestedEnumOriginalLanguageTypeFilter, {nullable:true})
    not?: NestedEnumOriginalLanguageTypeFilter;
}
