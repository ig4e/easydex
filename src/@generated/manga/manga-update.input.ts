import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MangaCoverUpdateManyWithoutMangaNestedInput } from '../manga-cover/manga-cover-update-many-without-manga-nested.input';
import { MangaTitleUpdateEnvelopeInput } from '../manga-title/manga-title-update-envelope.input';
import { MangaUpdatealtTitlesInput } from './manga-updatealt-titles.input';
import { MangaDescriptionUpdateEnvelopeInput } from '../manga-description/manga-description-update-envelope.input';
import { MangaExternalLinksUpdateEnvelopeInput } from '../manga-external-links/manga-external-links-update-envelope.input';
import { NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-original-language-type-field-update-operations.input';
import { NullableEnumMangaPublicationDemographicTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-manga-publication-demographic-type-field-update-operations.input';
import { EnumMangaStatusFieldUpdateOperationsInput } from '../prisma/enum-manga-status-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumMangaContentRatingFieldUpdateOperationsInput } from '../prisma/nullable-enum-manga-content-rating-field-update-operations.input';
import { MangaTagUpdateManyWithoutMangaNestedInput } from '../manga-tag/manga-tag-update-many-without-manga-nested.input';
import { EnumMangaTypeFieldUpdateOperationsInput } from '../prisma/enum-manga-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MangaUpdatetagIDsInput } from './manga-updatetag-i-ds.input';

@InputType()
export class MangaUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dexId?: StringFieldUpdateOperationsInput;

    @Field(() => MangaCoverUpdateManyWithoutMangaNestedInput, {nullable:true})
    covers?: MangaCoverUpdateManyWithoutMangaNestedInput;

    @Field(() => MangaTitleUpdateEnvelopeInput, {nullable:true})
    title?: MangaTitleUpdateEnvelopeInput;

    @Field(() => MangaUpdatealtTitlesInput, {nullable:true})
    altTitles?: MangaUpdatealtTitlesInput;

    @Field(() => MangaDescriptionUpdateEnvelopeInput, {nullable:true})
    description?: MangaDescriptionUpdateEnvelopeInput;

    @Field(() => MangaExternalLinksUpdateEnvelopeInput, {nullable:true})
    links?: MangaExternalLinksUpdateEnvelopeInput;

    @Field(() => NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput, {nullable:true})
    originalLanguage?: NullableEnumOriginalLanguageTypeFieldUpdateOperationsInput;

    @Field(() => NullableEnumMangaPublicationDemographicTypeFieldUpdateOperationsInput, {nullable:true})
    publicationDemographic?: NullableEnumMangaPublicationDemographicTypeFieldUpdateOperationsInput;

    @Field(() => EnumMangaStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumMangaStatusFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    releaseYear?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumMangaContentRatingFieldUpdateOperationsInput, {nullable:true})
    contentRating?: NullableEnumMangaContentRatingFieldUpdateOperationsInput;

    @Field(() => MangaTagUpdateManyWithoutMangaNestedInput, {nullable:true})
    tags?: MangaTagUpdateManyWithoutMangaNestedInput;

    @Field(() => EnumMangaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMangaTypeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    mcreatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    mupdatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    eupdatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    ecreatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MangaUpdatetagIDsInput, {nullable:true})
    tagIDs?: MangaUpdatetagIDsInput;
}