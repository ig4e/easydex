import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class MangaExternalLinksUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nu?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    al?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ap?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bw?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    kt?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mu?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    amz?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cdj?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ebj?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mal?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    raw?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    engtl?: NullableStringFieldUpdateOperationsInput;
}
