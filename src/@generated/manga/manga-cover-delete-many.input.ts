import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from '../manga-cover/manga-cover-where.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaCoverDeleteManyInput {

    @Field(() => MangaCoverWhereInput, {nullable:false})
    @Type(() => MangaCoverWhereInput)
    where!: MangaCoverWhereInput;
}
