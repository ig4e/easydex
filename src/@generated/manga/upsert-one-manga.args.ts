import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCreateInput } from './manga-create.input';
import { MangaUpdateInput } from './manga-update.input';

@ArgsType()
export class UpsertOneMangaArgs {

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;

    @Field(() => MangaCreateInput, {nullable:false})
    @Type(() => MangaCreateInput)
    create!: MangaCreateInput;

    @Field(() => MangaUpdateInput, {nullable:false})
    @Type(() => MangaUpdateInput)
    update!: MangaUpdateInput;
}
