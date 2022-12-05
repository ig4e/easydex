import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCoverUpdateWithoutMangaInput } from './manga-cover-update-without-manga.input';
import { MangaCoverCreateWithoutMangaInput } from './manga-cover-create-without-manga.input';

@InputType()
export class MangaCoverUpsertWithWhereUniqueWithoutMangaInput {

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;

    @Field(() => MangaCoverUpdateWithoutMangaInput, {nullable:false})
    @Type(() => MangaCoverUpdateWithoutMangaInput)
    update!: MangaCoverUpdateWithoutMangaInput;

    @Field(() => MangaCoverCreateWithoutMangaInput, {nullable:false})
    @Type(() => MangaCoverCreateWithoutMangaInput)
    create!: MangaCoverCreateWithoutMangaInput;
}
