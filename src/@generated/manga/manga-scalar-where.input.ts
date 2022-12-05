import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumOriginalLanguageTypeNullableFilter } from '../prisma/enum-original-language-type-nullable-filter.input';
import { EnumMangaPublicationDemographicTypeNullableFilter } from '../prisma/enum-manga-publication-demographic-type-nullable-filter.input';
import { EnumMangaStatusFilter } from '../prisma/enum-manga-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumMangaContentRatingNullableFilter } from '../prisma/enum-manga-content-rating-nullable-filter.input';
import { EnumMangaTypeFilter } from '../prisma/enum-manga-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MangaScalarWhereInput {

    @Field(() => [MangaScalarWhereInput], {nullable:true})
    AND?: Array<MangaScalarWhereInput>;

    @Field(() => [MangaScalarWhereInput], {nullable:true})
    OR?: Array<MangaScalarWhereInput>;

    @Field(() => [MangaScalarWhereInput], {nullable:true})
    NOT?: Array<MangaScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dexId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    altTitles?: StringNullableListFilter;

    @Field(() => EnumOriginalLanguageTypeNullableFilter, {nullable:true})
    originalLanguage?: EnumOriginalLanguageTypeNullableFilter;

    @Field(() => EnumMangaPublicationDemographicTypeNullableFilter, {nullable:true})
    publicationDemographic?: EnumMangaPublicationDemographicTypeNullableFilter;

    @Field(() => EnumMangaStatusFilter, {nullable:true})
    status?: EnumMangaStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    releaseYear?: IntNullableFilter;

    @Field(() => EnumMangaContentRatingNullableFilter, {nullable:true})
    contentRating?: EnumMangaContentRatingNullableFilter;

    @Field(() => EnumMangaTypeFilter, {nullable:true})
    type?: EnumMangaTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    version?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    mcreatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    mupdatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    eupdatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ecreatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tagIDs?: StringNullableListFilter;
}
