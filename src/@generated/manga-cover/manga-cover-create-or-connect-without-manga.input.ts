import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCoverCreateWithoutMangaInput } from './manga-cover-create-without-manga.input';

@InputType()
export class MangaCoverCreateOrConnectWithoutMangaInput {

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;

    @Field(() => MangaCoverCreateWithoutMangaInput, {nullable:false})
    @Type(() => MangaCoverCreateWithoutMangaInput)
    create!: MangaCoverCreateWithoutMangaInput;
}
