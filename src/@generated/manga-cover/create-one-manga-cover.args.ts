import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverCreateInput } from './manga-cover-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMangaCoverArgs {

    @Field(() => MangaCoverCreateInput, {nullable:false})
    @Type(() => MangaCoverCreateInput)
    data!: MangaCoverCreateInput;
}
