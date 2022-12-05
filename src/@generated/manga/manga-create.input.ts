import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateNestedManyWithoutMangaInput } from '../manga-cover/manga-cover-create-nested-many-without-manga.input';
import { MangaTitleCreateEnvelopeInput } from '../manga-title/manga-title-create-envelope.input';
import { MangaCreatealtTitlesInput } from './manga-createalt-titles.input';
import { MangaDescriptionCreateEnvelopeInput } from '../manga-description/manga-description-create-envelope.input';
import { MangaExternalLinksCreateEnvelopeInput } from '../manga-external-links/manga-external-links-create-envelope.input';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { MangaPublicationDemographicType } from '../prisma/manga-publication-demographic-type.enum';
import { MangaStatus } from '../prisma/manga-status.enum';
import { Int } from '@nestjs/graphql';
import { MangaContentRating } from './manga-content-rating.enum';
import { MangaTagCreateNestedManyWithoutMangaInput } from '../manga-tag/manga-tag-create-nested-many-without-manga.input';
import { MangaType } from '../prisma/manga-type.enum';
import { MangaCreatetagIDsInput } from './manga-createtag-i-ds.input';

@InputType()
export class MangaCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverCreateNestedManyWithoutMangaInput, {nullable:true})
    covers?: MangaCoverCreateNestedManyWithoutMangaInput;

    @Field(() => MangaTitleCreateEnvelopeInput, {nullable:false})
    title!: MangaTitleCreateEnvelopeInput;

    @Field(() => MangaCreatealtTitlesInput, {nullable:true})
    altTitles?: MangaCreatealtTitlesInput;

    @Field(() => MangaDescriptionCreateEnvelopeInput, {nullable:false})
    description!: MangaDescriptionCreateEnvelopeInput;

    @Field(() => MangaExternalLinksCreateEnvelopeInput, {nullable:false})
    links!: MangaExternalLinksCreateEnvelopeInput;

    @Field(() => OriginalLanguageType, {nullable:true})
    originalLanguage?: keyof typeof OriginalLanguageType;

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    publicationDemographic?: keyof typeof MangaPublicationDemographicType;

    @Field(() => MangaStatus, {nullable:false})
    status!: keyof typeof MangaStatus;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => MangaContentRating, {nullable:true})
    contentRating?: keyof typeof MangaContentRating;

    @Field(() => MangaTagCreateNestedManyWithoutMangaInput, {nullable:true})
    tags?: MangaTagCreateNestedManyWithoutMangaInput;

    @Field(() => MangaType, {nullable:true})
    type?: keyof typeof MangaType;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    eupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    ecreatedAt?: Date | string;

    @Field(() => MangaCreatetagIDsInput, {nullable:true})
    tagIDs?: MangaCreatetagIDsInput;
}
