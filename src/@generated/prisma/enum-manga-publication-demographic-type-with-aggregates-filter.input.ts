import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaPublicationDemographicType } from './manga-publication-demographic-type.enum';
import { NestedEnumMangaPublicationDemographicTypeWithAggregatesFilter } from './nested-enum-manga-publication-demographic-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaPublicationDemographicTypeFilter } from './nested-enum-manga-publication-demographic-type-filter.input';

@InputType()
export class EnumMangaPublicationDemographicTypeWithAggregatesFilter {

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    equals?: keyof typeof MangaPublicationDemographicType;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    in?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    notIn?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => NestedEnumMangaPublicationDemographicTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaPublicationDemographicTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaPublicationDemographicTypeFilter, {nullable:true})
    _min?: NestedEnumMangaPublicationDemographicTypeFilter;

    @Field(() => NestedEnumMangaPublicationDemographicTypeFilter, {nullable:true})
    _max?: NestedEnumMangaPublicationDemographicTypeFilter;
}
