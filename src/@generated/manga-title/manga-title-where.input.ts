import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class MangaTitleWhereInput {

    @Field(() => [MangaTitleWhereInput], {nullable:true})
    AND?: Array<MangaTitleWhereInput>;

    @Field(() => [MangaTitleWhereInput], {nullable:true})
    OR?: Array<MangaTitleWhereInput>;

    @Field(() => [MangaTitleWhereInput], {nullable:true})
    NOT?: Array<MangaTitleWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    en?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ja?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ko?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zh?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zh_hk?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ja_ro?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ko_ro?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zh_ro?: StringNullableFilter;
}
