import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCreateWithoutCoversInput } from './manga-create-without-covers.input';
import { Type } from 'class-transformer';
import { MangaCreateOrConnectWithoutCoversInput } from './manga-create-or-connect-without-covers.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';

@InputType()
export class MangaCreateNestedOneWithoutCoversInput {

    @Field(() => MangaCreateWithoutCoversInput, {nullable:true})
    @Type(() => MangaCreateWithoutCoversInput)
    create?: MangaCreateWithoutCoversInput;

    @Field(() => MangaCreateOrConnectWithoutCoversInput, {nullable:true})
    @Type(() => MangaCreateOrConnectWithoutCoversInput)
    connectOrCreate?: MangaCreateOrConnectWithoutCoversInput;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    connect?: MangaWhereUniqueInput;
}