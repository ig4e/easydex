import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OriginalLanguageType } from './original-language-type.enum';

@InputType()
export class EnumOriginalLanguageTypeFieldUpdateOperationsInput {

    @Field(() => OriginalLanguageType, {nullable:true})
    set?: keyof typeof OriginalLanguageType;
}
