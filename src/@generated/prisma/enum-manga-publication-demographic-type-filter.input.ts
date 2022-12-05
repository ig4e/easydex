import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaPublicationDemographicType } from './manga-publication-demographic-type.enum';
import { NestedEnumMangaPublicationDemographicTypeFilter } from './nested-enum-manga-publication-demographic-type-filter.input';

@InputType()
export class EnumMangaPublicationDemographicTypeFilter {

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    equals?: keyof typeof MangaPublicationDemographicType;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    in?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => [MangaPublicationDemographicType], {nullable:true})
    notIn?: Array<keyof typeof MangaPublicationDemographicType>;

    @Field(() => NestedEnumMangaPublicationDemographicTypeFilter, {nullable:true})
    not?: NestedEnumMangaPublicationDemographicTypeFilter;
}
