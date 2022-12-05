import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MangaCoverType } from '../prisma/manga-cover-type.enum';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Manga } from '../manga/manga.model';

@ObjectType()
export class MangaCover {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverType, {nullable:false,defaultValue:'COVER_ART'})
    type!: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:false})
    locale!: keyof typeof OriginalLanguageType;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => Float, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Manga, {nullable:false})
    manga?: Manga;

    @Field(() => String, {nullable:false})
    mangaId!: string;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date;

    @Field(() => Date, {nullable:false})
    eupdatedAt!: Date;

    @Field(() => Date, {nullable:false})
    ecreatedAt!: Date;
}
