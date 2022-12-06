import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverType } from './manga-cover-type.enum';
import { OriginalLanguageType } from './original-language-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MangaCoverObjectEqualityInput {

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaCoverType, {nullable:false})
    type!: keyof typeof MangaCoverType;

    @Field(() => OriginalLanguageType, {nullable:true})
    locale?: keyof typeof OriginalLanguageType;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => Float, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Date, {nullable:false})
    mcreatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    mupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    eupdatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    ecreatedAt!: Date | string;
}
