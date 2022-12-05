import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MangaCoverListRelationFilter } from '../manga-cover/manga-cover-list-relation-filter.input';
import { MangaTitleCompositeFilter } from './manga-title-composite-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { MangaDescriptionCompositeFilter } from '../prisma/manga-description-composite-filter.input';
import { MangaExternalLinksNullableCompositeFilter } from '../prisma/manga-external-links-nullable-composite-filter.input';
import { EnumOriginalLanguageTypeNullableFilter } from '../prisma/enum-original-language-type-nullable-filter.input';
import { EnumMangaPublicationDemographicTypeNullableFilter } from '../prisma/enum-manga-publication-demographic-type-nullable-filter.input';
import { EnumMangaStatusFilter } from '../prisma/enum-manga-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumMangaContentRatingNullableFilter } from '../prisma/enum-manga-content-rating-nullable-filter.input';
import { MangaTagListRelationFilter } from '../manga-tag/manga-tag-list-relation-filter.input';
import { EnumMangaTypeFilter } from '../prisma/enum-manga-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MangaWhereInput {

    @Field(() => [MangaWhereInput], {nullable:true})
    AND?: Array<MangaWhereInput>;

    @Field(() => [MangaWhereInput], {nullable:true})
    OR?: Array<MangaWhereInput>;

    @Field(() => [MangaWhereInput], {nullable:true})
    NOT?: Array<MangaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    dexId?: StringFilter;

    @Field(() => MangaCoverListRelationFilter, {nullable:true})
    covers?: MangaCoverListRelationFilter;

    @Field(() => MangaTitleCompositeFilter, {nullable:true})
    title?: MangaTitleCompositeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    altTitles?: StringNullableListFilter;

    @Field(() => MangaDescriptionCompositeFilter, {nullable:true})
    description?: MangaDescriptionCompositeFilter;

    @Field(() => MangaExternalLinksNullableCompositeFilter, {nullable:true})
    links?: MangaExternalLinksNullableCompositeFilter;

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

    @Field(() => MangaTagListRelationFilter, {nullable:true})
    tags?: MangaTagListRelationFilter;

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
