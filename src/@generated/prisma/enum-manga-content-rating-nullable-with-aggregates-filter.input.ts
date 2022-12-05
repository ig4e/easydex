import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';
import { NestedEnumMangaContentRatingNullableWithAggregatesFilter } from './nested-enum-manga-content-rating-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumMangaContentRatingNullableFilter } from './nested-enum-manga-content-rating-nullable-filter.input';

@InputType()
export class EnumMangaContentRatingNullableWithAggregatesFilter {

    @Field(() => MangaContentRating, {nullable:true})
    equals?: keyof typeof MangaContentRating;

    @Field(() => [MangaContentRating], {nullable:true})
    in?: Array<keyof typeof MangaContentRating>;

    @Field(() => [MangaContentRating], {nullable:true})
    notIn?: Array<keyof typeof MangaContentRating>;

    @Field(() => NestedEnumMangaContentRatingNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaContentRatingNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumMangaContentRatingNullableFilter, {nullable:true})
    _min?: NestedEnumMangaContentRatingNullableFilter;

    @Field(() => NestedEnumMangaContentRatingNullableFilter, {nullable:true})
    _max?: NestedEnumMangaContentRatingNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
