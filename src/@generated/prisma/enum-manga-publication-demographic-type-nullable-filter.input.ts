import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaPublicationDemographicType } from './manga-publication-demographic-type.enum';
import { NestedEnumMangaPublicationDemographicTypeNullableFilter } from './nested-enum-manga-publication-demographic-type-nullable-filter.input';

@InputType()
export class EnumMangaPublicationDemographicTypeNullableFilter {

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    equals?: keyof typeof MangaPublicationDemographicType;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    in?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    notIn?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => NestedEnumMangaPublicationDemographicTypeNullableFilter, {nullable:true})
    not?: NestedEnumMangaPublicationDemographicTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
