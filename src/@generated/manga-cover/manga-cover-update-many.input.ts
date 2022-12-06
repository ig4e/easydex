import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from './manga-cover-where.input';
import { Type } from 'class-transformer';
import { MangaCoverUpdateInput } from './manga-cover-update.input';

@InputType()
export class MangaCoverUpdateManyInput {

    @Field(() => MangaCoverWhereInput, {nullable:false})
    @Type(() => MangaCoverWhereInput)
    where!: MangaCoverWhereInput;

    @Field(() => MangaCoverUpdateInput, {nullable:false})
    @Type(() => MangaCoverUpdateInput)
    data!: MangaCoverUpdateInput;
}
