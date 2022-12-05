import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMangaCoverTypeWithAggregatesFilter } from '../prisma/enum-manga-cover-type-with-aggregates-filter.input';
import { EnumOriginalLanguageTypeNullableWithAggregatesFilter } from '../prisma/enum-original-language-type-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MangaCoverScalarWhereWithAggregatesInput {

    @Field(() => [MangaCoverScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MangaCoverScalarWhereWithAggregatesInput>;

    @Field(() => [MangaCoverScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MangaCoverScalarWhereWithAggregatesInput>;

    @Field(() => [MangaCoverScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MangaCoverScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dexId?: StringWithAggregatesFilter;

    @Field(() => EnumMangaCoverTypeWithAggregatesFilter, {nullable:true})
    type?: EnumMangaCoverTypeWithAggregatesFilter;

    @Field(() => EnumOriginalLanguageTypeNullableWithAggregatesFilter, {nullable:true})
    locale?: EnumOriginalLanguageTypeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileName?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    volume?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mangaId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    mcreatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    mupdatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    eupdatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    ecreatedAt?: DateTimeWithAggregatesFilter;
}
