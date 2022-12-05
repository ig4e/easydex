import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverScalarWhereInput } from './manga-cover-scalar-where.input';
import { Type } from 'class-transformer';
import { MangaCoverUpdateManyMutationInput } from './manga-cover-update-many-mutation.input';

@InputType()
export class MangaCoverUpdateManyWithWhereWithoutMangaInput {

    @Field(() => MangaCoverScalarWhereInput, {nullable:false})
    @Type(() => MangaCoverScalarWhereInput)
    where!: MangaCoverScalarWhereInput;

    @Field(() => MangaCoverUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaCoverUpdateManyMutationInput)
    data!: MangaCoverUpdateManyMutationInput;
}
