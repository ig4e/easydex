import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMangaCoverArgs {

    @Field(() => MangaCoverWhereUniqueInput, {nullable:false})
    @Type(() => MangaCoverWhereUniqueInput)
    where!: MangaCoverWhereUniqueInput;
}
