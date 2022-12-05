import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Type } from 'class-transformer';
import { MangaTagCreateWithoutMangaInput } from './manga-tag-create-without-manga.input';

@InputType()
export class MangaTagCreateOrConnectWithoutMangaInput {

    @Field(() => MangaTagWhereUniqueInput, {nullable:false})
    @Type(() => MangaTagWhereUniqueInput)
    where!: MangaTagWhereUniqueInput;

    @Field(() => MangaTagCreateWithoutMangaInput, {nullable:false})
    @Type(() => MangaTagCreateWithoutMangaInput)
    create!: MangaTagCreateWithoutMangaInput;
}
