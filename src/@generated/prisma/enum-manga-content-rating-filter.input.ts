import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';
import { NestedEnumMangaContentRatingFilter } from './nested-enum-manga-content-rating-filter.input';

@InputType()
export class EnumMangaContentRatingFilter {

    @Field(() => MangaContentRating, {nullable:true})
    equals?: keyof typeof MangaContentRating;

    @Field(() => [MangaContentRating], {nullable:true})
    in?: Array<keyof typeof MangaContentRating>;

    @Field(() => [MangaContentRating], {nullable:true})
    notIn?: Array<keyof typeof MangaContentRating>;

    @Field(() => NestedEnumMangaContentRatingFilter, {nullable:true})
    not?: NestedEnumMangaContentRatingFilter;
}
