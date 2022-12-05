import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCreateWithoutTagsInput } from './manga-create-without-tags.input';
import { Type } from 'class-transformer';
import { MangaCreateOrConnectWithoutTagsInput } from './manga-create-or-connect-without-tags.input';
import { MangaUpsertWithWhereUniqueWithoutTagsInput } from './manga-upsert-with-where-unique-without-tags.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { MangaUpdateWithWhereUniqueWithoutTagsInput } from './manga-update-with-where-unique-without-tags.input';
import { MangaUpdateManyWithWhereWithoutTagsInput } from './manga-update-many-with-where-without-tags.input';
import { MangaScalarWhereInput } from './manga-scalar-where.input';

@InputType()
export class MangaUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [MangaCreateWithoutTagsInput], {nullable:true})
    @Type(() => MangaCreateWithoutTagsInput)
    create?: Array<MangaCreateWithoutTagsInput>;

    @Field(() => [MangaCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => MangaCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<MangaCreateOrConnectWithoutTagsInput>;

    @Field(() => [MangaUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => MangaUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<MangaUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [MangaWhereUniqueInput], {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    set?: Array<MangaWhereUniqueInput>;

    @Field(() => [MangaWhereUniqueInput], {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    disconnect?: Array<MangaWhereUniqueInput>;

    @Field(() => [MangaWhereUniqueInput], {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    delete?: Array<MangaWhereUniqueInput>;

    @Field(() => [MangaWhereUniqueInput], {nullable:true})
    @Type(() => MangaWhereUniqueInput)
    connect?: Array<MangaWhereUniqueInput>;

    @Field(() => [MangaUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => MangaUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<MangaUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [MangaUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => MangaUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<MangaUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [MangaScalarWhereInput], {nullable:true})
    @Type(() => MangaScalarWhereInput)
    deleteMany?: Array<MangaScalarWhereInput>;
}
