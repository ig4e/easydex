import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCoverUpdateWithoutMangaInput } from './manga-cover-update-without-manga.input';

@InputType()
export class MangaCoverUpdateWithWhereUniqueWithoutMangaInput {

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;

    @Field(() => MangaCoverUpdateWithoutMangaInput, {nullable:false})
    @Type(() => MangaCoverUpdateWithoutMangaInput)
    data!: MangaCoverUpdateWithoutMangaInput;
}
