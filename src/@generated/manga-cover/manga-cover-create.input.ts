import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverType } from '../prisma/manga-cover-type.enum';
import { OriginalLanguageType } from '../prisma/original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MangaCreateNestedOneWithoutCoversInput } from '../manga/manga-create-nested-one-without-covers.input';

@InputType()
export class MangaCoverCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverType, {nullable:true})
    type?: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:false})
    locale!: keyof typeof OriginalLanguageType;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => Float, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => MangaCreateNestedOneWithoutCoversInput, {nullable:false})
    manga!: MangaCreateNestedOneWithoutCoversInput;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    eupdatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    ecreatedAt?: Date | string;
}
