import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaUpdateWithoutTagsInput } from './manga-update-without-tags.input';
import { Type } from 'class-transformer';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';

@InputType()
export class MangaUpsertWithoutTagsInput {

    @Field(() => MangaUpdateWithoutTagsInput, {nullable:false})
    @Type(() => MangaUpdateWithoutTagsInput)
    update!: MangaUpdateWithoutTagsInput;

    @Field(() => MangaCreateWithoutTagsInput, {nullable:false})
    @Type(() => MangaCreateWithoutTagsInput)
    create!: MangaCreateWithoutTagsInput;
}
