import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateWithoutMangaInput } from './manga-cover-create-without-manga.input';
import { Type } from 'class-transformer';
import { MangaCoverCreateOrConnectWithoutMangaInput } from './manga-cover-create-or-connect-without-manga.input';
import { MangaCoverCreateManyMangaInputEnvelope } from './manga-cover-create-many-manga-input-envelope.input';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';

@InputType()
export class MangaCoverUncheckedCreateNestedManyWithoutMangaInput {

    @Field(() => [MangaCoverCreateWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverCreateWithoutMangaInput)
    create?: Array<MangaCoverCreateWithoutMangaInput>;

    @Field(() => [MangaCoverCreateOrConnectWithoutMangaInput], {nullable:true})
    @Type(() => MangaCoverCreateOrConnectWithoutMangaInput)
    connectOrCreate?: Array<MangaCoverCreateOrConnectWithoutMangaInput>;

    @Field(() => MangaCoverCreateManyMangaInputEnvelope, {nullable:true})
    @Type(() => MangaCoverCreateManyMangaInputEnvelope)
    createMany?: MangaCoverCreateManyMangaInputEnvelope;

    @Field(() => [MangaCoverWhereUniqueInput], {nullable:true})
    @Type(() => MangaCoverWhereUniqueInput)
    connect?: Array<MangaCoverWhereUniqueInput>;
}
