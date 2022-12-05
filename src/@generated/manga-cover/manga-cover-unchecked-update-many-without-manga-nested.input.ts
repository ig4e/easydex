import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateWithoutMangaInput } from './manga-cover-create-without-manga.input';
import { Type } from 'class-transformer';
import { MangaCoverCreateOrConnectWithoutMangaInput } from './manga-cover-create-or-connect-without-manga.input';
import { MangaCoverUpsertWithWhereUniqueWithoutMangaInput } from './manga-cover-upsert-with-where-unique-without-manga.input';
import { MangaCoverCreateManyMangaInputEnvelope } from './manga-cover-create-many-manga-input-envelope.input';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { MangaCoverUpdateWithWhereUniqueWithoutMangaInput } from './manga-cover-update-with-where-unique-without-manga.input';
import { MangaCoverUpdateManyWithWhereWithoutMangaInput } from './manga-cover-update-many-with-where-without-manga.input';
import { MangaCoverScalarWhereInput } from './manga-cover-scalar-where.input';

@InputType()
export class MangaCoverUncheckedUpdateManyWithoutMangaNestedInput {

    @Field(() => [MangaCoverCreateWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverCreateWithoutMangaInput)
    create?: Array<MangaCoverCreateWithoutMangaInput>;

    @Field(() => [MangaCoverCreateOrConnectWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverCreateOrConnectWithoutMangaInput)
    connectOrCreate?: Array<MangaCoverCreateOrConnectWithoutMangaInput>;

    @Field(() => [MangaCoverUpsertWithWhereUniqueWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverUpsertWithWhereUniqueWithoutMangaInput)
    upsert?: Array<MangaCoverUpsertWithWhereUniqueWithoutMangaInput>;

    @Field(() => MangaCoverCreateManyMangaInputEnvelope, {nullable:true})
    @Type(() => MangaCoverCreateManyMangaInputEnvelope)
    createMany?: MangaCoverCreateManyMangaInputEnvelope;

    @Field(() => [MangaCoverWhereUniqueInput], {nullable:true})
    @Type(() => MangaCoverWhereUniqueInput)
    set?: Array<MangaCoverWhereUniqueInput>;

    @Field(() => [MangaCoverWhereUniqueInput], {nullable:true})
    @Type(() => MangaCoverWhereUniqueInput)
    disconnect?: Array<MangaCoverWhereUniqueInput>;

    @Field(() => [MangaCoverWhereUniqueInput], {nullable:true})
    @Type(() => MangaCoverWhereUniqueInput)
    delete?: Array<MangaCoverWhereUniqueInput>;

    @Field(() => [MangaCoverWhereUniqueInput], {nullable:true})
    @Type(() => MangaCoverWhereUniqueInput)
    connect?: Array<MangaCoverWhereUniqueInput>;

    @Field(() => [MangaCoverUpdateWithWhereUniqueWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverUpdateWithWhereUniqueWithoutMangaInput)
    update?: Array<MangaCoverUpdateWithWhereUniqueWithoutMangaInput>;

    @Field(() => [MangaCoverUpdateManyWithWhereWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverUpdateManyWithWhereWithoutMangaInput)
    updateMany?: Array<MangaCoverUpdateManyWithWhereWithoutMangaInput>;

    @Field(() => [MangaCoverScalarWhereInput], {nullable:true})
    @Type(() => MangaCoverScalarWhereInput)
    deleteMany?: Array<MangaCoverScalarWhereInput>;
}
