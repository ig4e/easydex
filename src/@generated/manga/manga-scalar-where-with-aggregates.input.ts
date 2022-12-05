import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumOriginalLanguageTypeNullableWithAggregatesFilter } from '../prisma/enum-original-language-type-nullable-with-aggregates-filter.input';
import { EnumMangaPublicationDemographicTypeNullableWithAggregatesFilter } from '../prisma/enum-manga-publication-demographic-type-nullable-with-aggregates-filter.input';
import { EnumMangaStatusWithAggregatesFilter } from '../prisma/enum-manga-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumMangaContentRatingNullableWithAggregatesFilter } from '../prisma/enum-manga-content-rating-nullable-with-aggregates-filter.input';
import { EnumMangaTypeWithAggregatesFilter } from '../prisma/enum-manga-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MangaScalarWhereWithAggregatesInput {

    @Field(() => [MangaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MangaScalarWhereWithAggregatesInput>;

    @Field(() => [MangaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MangaScalarWhereWithAggregatesInput>;

    @Field(() => [MangaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MangaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dexId?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    altTitles?: StringNullableListFilter;

    @Field(() => EnumOriginalLanguageTypeNullableWithAggregatesFilter, {nullable:true})
    originalLanguage?: EnumOriginalLanguageTypeNullableWithAggregatesFilter;

    @Field(() => EnumMangaPublicationDemographicTypeNullableWithAggregatesFilter, {nullable:true})
    publicationDemographic?: EnumMangaPublicationDemographicTypeNullableWithAggregatesFilter;

    @Field(() => EnumMangaStatusWithAggregatesFilter, {nullable:true})
    status?: EnumMangaStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    releaseYear?: IntNullableWithAggregatesFilter;

    @Field(() => EnumMangaContentRatingNullableWithAggregatesFilter, {nullable:true})
    contentRating?: EnumMangaContentRatingNullableWithAggregatesFilter;

    @Field(() => EnumMangaTypeWithAggregatesFilter, {nullable:true})
    type?: EnumMangaTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    mcreatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    mupdatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    eupdatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    ecreatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tagIDs?: StringNullableListFilter;
}
