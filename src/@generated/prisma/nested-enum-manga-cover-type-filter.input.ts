import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverType } from './manga-cover-type.enum';

@InputType()
export class NestedEnumMangaCoverTypeFilter {

    @Field(() => MangaCoverType, {nullable:true})
    equals?: keyof typeof MangaCoverType;

    @Field(() => [MangaCoverType], {nullable:true})
    in?: Array<keyof typeof MangaCoverType>;

    @Field(() => [MangaCoverType], {nullable:true})
    notIn?: Array<keyof typeof MangaCoverType>;

    @Field(() => NestedEnumMangaCoverTypeFilter, {nullable:true})
    not?: NestedEnumMangaCoverTypeFilter;
}
