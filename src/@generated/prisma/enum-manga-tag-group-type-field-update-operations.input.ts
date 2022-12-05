import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';

@InputType()
export class EnumMangaTagGroupTypeFieldUpdateOperationsInput {

    @Field(() => MangaTagGroupType, {nullable:true})
    set?: keyof typeof MangaTagGroupType;
}
