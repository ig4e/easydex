import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Type } from 'class-transformer';
import { MangaTagUpdateWithoutMangaInput } from './manga-tag-update-without-manga.input';
import { MangaTagCreateWithoutMangaInput } from './manga-tag-create-without-manga.input';

@InputType()
export class MangaTagUpsertWithWhereUniqueWithoutMangaInput {

    @Field(() => MangaTagWhereUniqueInput, {nullable:false})
    @Type(() => MangaTagWhereUniqueInput)
    where!: MangaTagWhereUniqueInput;

    @Field(() => MangaTagUpdateWithoutMangaInput, {nullable:false})
    @Type(() => MangaTagUpdateWithoutMangaInput)
    update!: MangaTagUpdateWithoutMangaInput;

    @Field(() => MangaTagCreateWithoutMangaInput, {nullable:false})
    @Type(() => MangaTagCreateWithoutMangaInput)
    create!: MangaTagCreateWithoutMangaInput;
}
