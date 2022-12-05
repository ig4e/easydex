import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaType } from './manga-type.enum';

@InputType()
export class EnumMangaTypeFieldUpdateOperationsInput {

    @Field(() => MangaType, {nullable:true})
    set?: keyof typeof MangaType;
}
