import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaUpdateInput } from './manga-update.input';
import { Type } from 'class-transformer';
import { MangaWhereUniqueInput } from './manga-where-unique.input';

@ArgsType()
export class UpdateOneMangaArgs {

    @Field(() => MangaUpdateInput, {nullable:false})
    @Type(() => MangaUpdateInput)
    data!: MangaUpdateInput;

    @Field(() => MangaWhereUniqueInput, {nullable:false})
    @Type(() => MangaWhereUniqueInput)
    where!: MangaWhereUniqueInput;
}
