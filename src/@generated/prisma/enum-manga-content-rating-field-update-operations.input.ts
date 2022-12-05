import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaContentRating } from '../manga/manga-content-rating.enum';

@InputType()
export class EnumMangaContentRatingFieldUpdateOperationsInput {

    @Field(() => MangaContentRating, {nullable:true})
    set?: keyof typeof MangaContentRating;
}
