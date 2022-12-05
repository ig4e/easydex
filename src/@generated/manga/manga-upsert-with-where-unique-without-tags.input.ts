import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Type } from 'class-transformer';
import { MangaUpdateWithoutTagsInput } from './manga-update-without-tags.input';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';

@InputType()
export class MangaUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;

    @Field(() => MangaUpdateWithoutTagsInput, {nullable:false})
    @Type(() => MangaUpdateWithoutTagsInput)
    update!: MangaUpdateWithoutTagsInput;

    @Field(() => MangaCreateWithoutTagsInput, {nullable:false})
    @Type(() => MangaCreateWithoutTagsInput)
    create!: MangaCreateWithoutTagsInput;
}
