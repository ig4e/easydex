import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';

@InputType()
export class MangaCreateOrConnectWithoutTagsInput {

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;

    @Field(() => MangaCreateWithoutTagsInput, {nullable:false})
    @Type(() => MangaCreateWithoutTagsInput)
    create!: MangaCreateWithoutTagsInput;
}
