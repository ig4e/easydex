import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MangaTagNameUpdateEnvelopeInput } from '../manga-tag-name/manga-tag-name-update-envelope.input';
import { EnumMangaTagGroupTypeFieldUpdateOperationsInput } from '../prisma/enum-manga-tag-group-type-field-update-operations.input';
import { MangaTagUpdatemangaIDsInput } from './manga-tag-updatemanga-i-ds.input';

@InputType()
export class MangaTagUncheckedUpdateWithoutMangaInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dexId?: StringFieldUpdateOperationsInput;

    @Field(() => MangaTagNameUpdateEnvelopeInput, {nullable:true})
    name?: MangaTagNameUpdateEnvelopeInput;

    @Field(() => EnumMangaTagGroupTypeFieldUpdateOperationsInput, {nullable:true})
    group?: EnumMangaTagGroupTypeFieldUpdateOperationsInput;

    @Field(() => MangaTagUpdatemangaIDsInput, {nullable:true})
    mangaIDs?: MangaTagUpdatemangaIDsInput;
}
