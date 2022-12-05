import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCreateWithoutCoversInput } from './manga-create-without-covers.input';
import { Type } from 'class-transformer';
import { MangaCreateOrConnectWithoutCoversInput } from './manga-create-or-connect-without-covers.input';
import { MangaUpsertWithoutCoversInput } from './manga-upsert-without-covers.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { MangaUpdateWithoutCoversInput } from './manga-update-without-covers.input';

@InputType()
export class MangaUpdateOneRequiredWithoutCoversNestedInput {

    @Field(() => MangaCreateWithoutCoversInput, {nullable:true})
    @Type(() => MangaCreateWithoutCoversInput)
    create?: MangaCreateWithoutCoversInput;

    @Field(() => MangaCreateOrConnectWithoutCoversInput, {nullable:true})
    @Type(() => MangaCreateOrConnectWithoutCoversInput)
    connectOrCreate?: MangaCreateOrConnectWithoutCoversInput;

    @Field(() => MangaUpsertWithoutCoversInput, {nullable:true})
    @Type(() => MangaUpsertWithoutCoversInput)
    upsert?: MangaUpsertWithoutCoversInput;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    connect?: MangaWhereUniqueInput;

    @Field(() => MangaUpdateWithoutCoversInput, {nullable:true})
    @Type(() => MangaUpdateWithoutCoversInput)
    update?: MangaUpdateWithoutCoversInput;
}
