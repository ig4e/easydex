import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaPublicationDemographicType } from './manga-publication-demographic-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumMangaPublicationDemographicTypeNullableFilter } from './nested-enum-manga-publication-demographic-type-nullable-filter.input';

@InputType()
export class NestedEnumMangaPublicationDemographicTypeNullableWithAggregatesFilter {

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    equals?: keyof typeof MangaPublicationDemographicType;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    in?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    notIn?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => NestedEnumMangaPublicationDemographicTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaPublicationDemographicTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumMangaPublicationDemographicTypeNullableFilter, {nullable:true})
    _min?: NestedEnumMangaPublicationDemographicTypeNullableFilter;

    @Field(() => NestedEnumMangaPublicationDemographicTypeNullableFilter, {nullable:true})
    _max?: NestedEnumMangaPublicationDemographicTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
