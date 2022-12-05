import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverUpdateInput } from './manga-cover-update.input';
import { Type } from 'class-transformer';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';

@ArgsType()
export class UpdateOneMangaCoverArgs {

    @Field(() => MangaCoverUpdateInput, {nullable:false})
    @Type(() => MangaCoverUpdateInput)
    data!: MangaCoverUpdateInput;

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;
}
