import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagCreateWithoutMangaInput } from './manga-tag-create-without-manga.input';
import { Type } from 'class-transformer';
import { MangaTagCreateOrConnectWithoutMangaInput } from './manga-tag-create-or-connect-without-manga.input';
import { MangaTagUpsertWithWhereUniqueWithoutMangaInput } from './manga-tag-upsert-with-where-unique-without-manga.input';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { MangaTagUpdateWithWhereUniqueWithoutMangaInput } from './manga-tag-update-with-where-unique-without-manga.input';
import { MangaTagUpdateManyWithWhereWithoutMangaInput } from './manga-tag-update-many-with-where-without-manga.input';
import { MangaTagScalarWhereInput } from './manga-tag-scalar-where.input';

@InputType()
export class MangaTagUpdateManyWithoutMangaNestedInput {

    @Field(() => [MangaTagCreateWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagCreateWithoutMangaInput)
    create?: Array<MangaTagCreateWithoutMangaInput>;

    @Field(() => [MangaTagCreateOrConnectWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagCreateOrConnectWithoutMangaInput)
    connectOrCreate?: Array<MangaTagCreateOrConnectWithoutMangaInput>;

    @Field(() => [MangaTagUpsertWithWhereUniqueWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagUpsertWithWhereUniqueWithoutMangaInput)
    upsert?: Array<MangaTagUpsertWithWhereUniqueWithoutMangaInput>;

    @Field(() => [MangaTagWhereUniqueInput], {nullable:true})
    @Type(() => MangaTagWhereUniqueInput)
    set?: Array<MangaTagWhereUniqueInput>;

    @Field(() => [MangaTagWhereUniqueInput], {nullable:true})
    @Type(() => MangaTagWhereUniqueInput)
    disconnect?: Array<MangaTagWhereUniqueInput>;

    @Field(() => [MangaTagWhereUniqueInput], {nullable:true})
    @Type(() => MangaTagWhereUniqueInput)
    delete?: Array<MangaTagWhereUniqueInput>;

    @Field(() => [MangaTagWhereUniqueInput], {nullable:true})
    @Type(() => MangaTagWhereUniqueInput)
    connect?: Array<MangaTagWhereUniqueInput>;

    @Field(() => [MangaTagUpdateWithWhereUniqueWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagUpdateWithWhereUniqueWithoutMangaInput)
    update?: Array<MangaTagUpdateWithWhereUniqueWithoutMangaInput>;

    @Field(() => [MangaTagUpdateManyWithWhereWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagUpdateManyWithWhereWithoutMangaInput)
    updateMany?: Array<MangaTagUpdateManyWithWhereWithoutMangaInput>;

    @Field(() => [MangaTagScalarWhereInput], {nullable:true})
    @Type(() => MangaTagScalarWhereInput)
    deleteMany?: Array<MangaTagScalarWhereInput>;
}
