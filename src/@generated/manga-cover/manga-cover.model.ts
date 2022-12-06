import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaCoverType } from '../prisma/manga-cover-type.enum';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCover {

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverType, {nullable:false,defaultValue:'COVER_ART'})
    type!: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:true})
    locale!: keyof typeof OriginalLanguageType | null;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => Float, {nullable:false})
    volume!: number;

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
}
