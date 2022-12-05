import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MangaCover } from '../manga-cover/manga-cover.model';
import { MangaTitle } from '../manga-title/manga-title.model';
import { MangaDescription } from '../manga-description/manga-description.model';
import { MangaExternalLinks } from '../manga-external-links/manga-external-links.model';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { MangaPublicationDemographicType } from '../prisma/manga-publication-demographic-type.enum';
import { MangaStatus } from '../prisma/manga-status.enum';
import { Int } from '@nestjs/graphql';
import { MangaContentRating } from './manga-content-rating.enum';
import { MangaTag } from '../manga-tag/manga-tag.model';
import { MangaType } from '../prisma/manga-type.enum';
import { MangaCount } from './manga-count.output';

@ObjectType()
export class Manga {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => [MangaCover], {nullable:true})
    covers?: Array<MangaCover>;

    @Field(() => MangaTitle, {nullable:false})
    title?: MangaTitle;

    @Field(() => [String], {nullable:true})
    altTitles!: Array<string>;

    @Field(() => MangaDescription, {nullable:false})
    description?: MangaDescription;

    @Field(() => MangaExternalLinks, {nullable:true})
    links?: MangaExternalLinks | null;

    @Field(() => OriginalLanguageType, {nullable:true})
    originalLanguage!: keyof typeof OriginalLanguageType | null;

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    publicationDemographic!: keyof typeof MangaPublicationDemographicType | null;

    @Field(() => MangaStatus, {nullable:false})
    status!: keyof typeof MangaStatus;

    @Field(() => Int, {nullable:true})
    releaseYear!: number | null;

    @Field(() => MangaContentRating, {nullable:true})
    contentRating!: keyof typeof MangaContentRating | null;

    @Field(() => [MangaTag], {nullable:true})
    tags?: Array<MangaTag>;

    @Field(() => MangaType, {nullable:false,defaultValue:'MANGA'})
    type!: keyof typeof MangaType;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date;

    @Field(() => Date, {nullable:false})
    eupdatedAt!: Date;

    @Field(() => Date, {nullable:false})
    ecreatedAt!: Date;

    @Field(() => [String], {nullable:true})
    tagIDs!: Array<string>;

    @Field(() => MangaCount, {nullable:false})
    _count?: MangaCount;
}
