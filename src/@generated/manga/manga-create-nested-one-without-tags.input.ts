import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';
import { Type } from 'class-transformer';
import { MangaCreateOrConnectWithoutTagsInput } from './manga-create-or-connect-without-tags.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';

@InputType()
export class MangaCreateNestedOneWithoutTagsInput {

    @Field(() => MangaCreateWithoutTagsInput, {nullable:true})
    @Type(() => MangaCreateWithoutTagsInput)
    create?: MangaCreateWithoutTagsInput;

    @Field(() => MangaCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => MangaCreateOrConnectWithoutTagsInput)
    connectOrCreate?: MangaCreateOrConnectWithoutTagsInput;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    connect?: MangaWhereUniqueInput;
}
