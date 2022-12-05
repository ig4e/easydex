import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';

@InputType()
export class NestedEnumMangaContentRatingNullableFilter {

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
