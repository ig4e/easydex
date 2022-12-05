import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaUpdateWithoutCoversInput } from './manga-update-without-covers.input';
import { Type } from 'class-transformer';
import { MangaCreateWithoutCoversInput } from './manga-create-without-covers.input';

@InputType()
export class MangaUpsertWithoutCoversInput {

    @Field(() => MangaUpdateWithoutCoversInput, {nullable:false})
    @Type(() => MangaUpdateWithoutCoversInput)
    update!: MangaUpdateWithoutCoversInput;

    @Field(() => MangaCreateWithoutCoversInput, {nullable:false})
    @Type(() => MangaCreateWithoutCoversInput)
    create!: MangaCreateWithoutCoversInput;
}
