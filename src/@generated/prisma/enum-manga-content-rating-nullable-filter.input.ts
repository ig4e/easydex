import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';
import { NestedEnumMangaContentRatingNullableFilter } from './nested-enum-manga-content-rating-nullable-filter.input';

@InputType()
export class EnumMangaContentRatingNullableFilter {

    @Field(() => MangaContentRating, {nullable:true})
    equals?: keyof typeof MangaContentRating;

    @Field(() => [MangaContentRating], {nullable:true})
    in?: Array<keyof typeof MangaContentRating>;

    @Field(() => [MangaContentRating], {nullable:true})
    notIn?: Array<keyof typeof MangaContentRating>;

    @Field(() => NestedEnumMangaContentRatingNullableFilter, {nullable:true})
    not?: NestedEnumMangaContentRatingNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
