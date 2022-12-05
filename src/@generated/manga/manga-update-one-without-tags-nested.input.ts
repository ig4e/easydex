import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';
import { Type } from 'class-transformer';
import { MangaCreateOrConnectWithoutTagsInput } from './manga-create-or-connect-without-tags.input';
import { MangaUpsertWithoutTagsInput } from './manga-upsert-without-tags.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { MangaUpdateWithoutTagsInput } from './manga-update-without-tags.input';

@InputType()
export class MangaUpdateOneWithoutTagsNestedInput {

    @Field(() => MangaCreateWithoutTagsInput, {nullable:true})
    @Type(() => MangaCreateWithoutTagsInput)
    create?: MangaCreateWithoutTagsInput;

    @Field(() => MangaCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => MangaCreateOrConnectWithoutTagsInput)
    connectOrCreate?: MangaCreateOrConnectWithoutTagsInput;

    @Field(() => MangaUpsertWithoutTagsInput, {nullable:true})
    @Type(() => MangaUpsertWithoutTagsInput)
    upsert?: MangaUpsertWithoutTagsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    connect?: MangaWhereUniqueInput;

    @Field(() => MangaUpdateWithoutTagsInput, {nullable:true})
    @Type(() => MangaUpdateWithoutTagsInput)
    update?: MangaUpdateWithoutTagsInput;
}
