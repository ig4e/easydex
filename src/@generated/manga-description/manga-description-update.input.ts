import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class MangaDescriptionUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    en?: NullableStringFieldUpdateOperationsInput;
}
