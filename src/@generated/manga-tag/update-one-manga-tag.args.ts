import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagUpdateInput } from './manga-tag-update.input';
import { Type } from 'class-transformer';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';

@ArgsType()
export class UpdateOneMangaTagArgs {

    @Field(() => MangaTagUpdateInput, {nullable:false})
    @Type(() => MangaTagUpdateInput)
    data!: MangaTagUpdateInput;

    @Field(() => MangaTagWhereUniqueInput, {nullable:false})
    @Type(() => MangaTagWhereUniqueInput)
    where!: MangaTagWhereUniqueInput;
}
