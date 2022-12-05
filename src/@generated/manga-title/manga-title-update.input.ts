import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class MangaTitleUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    en?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ja?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ko?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zh?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zh_hk?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ja_ro?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ko_ro?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zh_ro?: NullableStringFieldUpdateOperationsInput;
}
