import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Type } from 'class-transformer';
import { MangaUpdateWithoutTagsInput } from './manga-update-without-tags.input';

@InputType()
export class MangaUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;

    @Field(() => MangaUpdateWithoutTagsInput, {nullable:false})
    @Type(() => MangaUpdateWithoutTagsInput)
    data!: MangaUpdateWithoutTagsInput;
}
