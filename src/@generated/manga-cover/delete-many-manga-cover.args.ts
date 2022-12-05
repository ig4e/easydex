import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from './manga-cover-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMangaCoverArgs {

    @Field(() => MangaCoverWhereInput, {nullable:true})
    @Type(() => MangaCoverWhereInput)
    where?: MangaCoverWhereInput;
}
