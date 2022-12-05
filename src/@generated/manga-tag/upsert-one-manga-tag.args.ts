import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Type } from 'class-transformer';
import { MangaTagCreateInput } from './manga-tag-create.input';
import { MangaTagUpdateInput } from './manga-tag-update.input';

@ArgsType()
export class UpsertOneMangaTagArgs {

    @Field(() => MangaTagWhereUniqueInput, {nullable:false})
    @Type(() => MangaTagWhereUniqueInput)
    where!: MangaTagWhereUniqueInput;

    @Field(() => MangaTagCreateInput, {nullable:false})
    @Type(() => MangaTagCreateInput)
    create!: MangaTagCreateInput;

    @Field(() => MangaTagUpdateInput, {nullable:false})
    @Type(() => MangaTagUpdateInput)
    update!: MangaTagUpdateInput;
}
