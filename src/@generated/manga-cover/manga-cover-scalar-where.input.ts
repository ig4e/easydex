import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMangaCoverTypeFilter } from '../prisma/enum-manga-cover-type-filter.input';
import { EnumOriginalLanguageTypeNullableFilter } from '../prisma/enum-original-language-type-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MangaCoverScalarWhereInput {

    @Field(() => [MangaCoverScalarWhereInput], {nullable:true})
    AND?: Array<MangaCoverScalarWhereInput>;

    @Field(() => [MangaCoverScalarWhereInput], {nullable:true})
    OR?: Array<MangaCoverScalarWhereInput>;

    @Field(() => [MangaCoverScalarWhereInput], {nullable:true})
    NOT?: Array<MangaCoverScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dexId?: StringFilter;

    @Field(() => EnumMangaCoverTypeFilter, {nullable:true})
    type?: EnumMangaCoverTypeFilter;

    @Field(() => EnumOriginalLanguageTypeNullableFilter, {nullable:true})
    locale?: EnumOriginalLanguageTypeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fileName?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    volume?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    version?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    mangaId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    mcreatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    mupdatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    eupdatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ecreatedAt?: DateTimeFilter;
}
