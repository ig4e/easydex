import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';

@InputType()
export class NullableEnumMangaContentRatingFieldUpdateOperationsInput {

    @Field(() => MangaContentRating, {nullable:true})
    set?: keyof typeof MangaContentRating;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
