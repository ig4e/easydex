import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCreateWithoutCoversInput } from './manga-create-without-covers.input';

@InputType()
export class MangaCreateOrConnectWithoutCoversInput {

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;

    @Field(() => MangaCreateWithoutCoversInput, {nullable:false})
    @Type(() => MangaCreateWithoutCoversInput)
    create!: MangaCreateWithoutCoversInput;
}
