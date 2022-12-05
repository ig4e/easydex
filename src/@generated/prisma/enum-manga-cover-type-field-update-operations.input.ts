import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverType } from './manga-cover-type.enum';

@InputType()
export class EnumMangaCoverTypeFieldUpdateOperationsInput {

    @Field(() => MangaCoverType, {nullable:true})
    set?: keyof typeof MangaCoverType;
}
