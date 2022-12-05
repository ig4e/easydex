import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaCoverType } from '../prisma/manga-cover-type.enum';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MangaCoverMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    dexId?: string;

    @Field(() => MangaCoverType, {nullable:true})
    type?: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:true})
    locale?: keyof typeof OriginalLanguageType;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => Float, {nullable:true})
    volume?: number;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => String, {nullable:true})
    mangaId?: string;

    @Field(() => Date, {nullable:true})
    mcreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    mupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    eupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    ecreatedAt?: Date | string;
}
