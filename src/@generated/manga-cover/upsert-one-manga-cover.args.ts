import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Type } from 'class-transformer';
import { MangaCoverCreateInput } from './manga-cover-create.input';
import { MangaCoverUpdateInput } from './manga-cover-update.input';

@ArgsType()
export class UpsertOneMangaCoverArgs {

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;

    @Field(() => MangaCoverCreateInput, {nullable:false})
    @Type(() => MangaCoverCreateInput)
    create!: MangaCoverCreateInput;

    @Field(() => MangaCoverUpdateInput, {nullable:false})
    @Type(() => MangaCoverUpdateInput)
    update!: MangaCoverUpdateInput;
}
