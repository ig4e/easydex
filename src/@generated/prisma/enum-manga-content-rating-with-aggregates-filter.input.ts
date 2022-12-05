import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';
import { NestedEnumMangaContentRatingWithAggregatesFilter } from './nested-enum-manga-content-rating-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaContentRatingFilter } from './nested-enum-manga-content-rating-filter.input';

@InputType()
export class EnumMangaContentRatingWithAggregatesFilter {

    @Field(() => MangaContentRating, {nullable:true})
    equals?: keyof typeof MangaContentRating;

    @Field(() => [MangaContentRating], {nullable:true})
    in?: Array<keyof typeof MangaContentRating>;

    @Field(() => [MangaContentRating], {nullable:true})
    notIn?: Array<keyof typeof MangaContentRating>;

    @Field(() => NestedEnumMangaContentRatingWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaContentRatingWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaContentRatingFilter, {nullable:true})
    _min?: NestedEnumMangaContentRatingFilter;

    @Field(() => NestedEnumMangaContentRatingFilter, {nullable:true})
    _max?: NestedEnumMangaContentRatingFilter;
}
