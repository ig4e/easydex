import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagCreateWithoutMangaInput } from './manga-tag-create-without-manga.input';
import { Type } from 'class-transformer';
import { MangaTagCreateOrConnectWithoutMangaInput } from './manga-tag-create-or-connect-without-manga.input';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';

@InputType()
export class MangaTagCreateNestedManyWithoutMangaInput {

    @Field(() => [MangaTagCreateWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagCreateWithoutMangaInput)
    create?: Array<MangaTagCreateWithoutMangaInput>;

    @Field(() => [MangaTagCreateOrConnectWithoutMangaInput], {nullable:true})
    @Type(() => MangaTagCreateOrConnectWithoutMangaInput)
    connectOrCreate?: Array<MangaTagCreateOrConnectWithoutMangaInput>;

    @Field(() => [MangaTagWhereUniqueInput], {nullable:true})
    @Type(() => MangaTagWhereUniqueInput)
    connect?: Array<MangaTagWhereUniqueInput>;
}
