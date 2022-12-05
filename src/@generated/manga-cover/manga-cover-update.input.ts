import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMangaCoverTypeFieldUpdateOperationsInput } from '../prisma/enum-manga-cover-type-field-update-operations.input';
import { NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-original-language-type-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MangaUpdateOneRequiredWithoutCoversNestedInput } from '../manga/manga-update-one-required-without-covers-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MangaCoverUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dexId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMangaCoverTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMangaCoverTypeFieldUpdateOperationsInput;

    @Field(() => NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput, {nullable:true})
    locale?: NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fileName?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    volume?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: IntFieldUpdateOperationsInput;

    @Field(() => MangaUpdateOneRequiredWithoutCoversNestedInput, {nullable:true})
    manga?: MangaUpdateOneRequiredWithoutCoversNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    mcreatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    mupdatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    eupdatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    ecreatedAt?: DateTimeFieldUpdateOperationsInput;
}
