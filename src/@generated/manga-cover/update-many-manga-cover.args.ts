import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverUpdateManyMutationInput } from './manga-cover-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MangaCoverWhereInput } from './manga-cover-where.input';

@ArgsType()
export class UpdateManyMangaCoverArgs {

    @Field(() => MangaCoverUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaCoverUpdateManyMutationInput)
    data!: MangaCoverUpdateManyMutationInput;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    @Type(() => MangaCoverWhereInput)
    where?: MangaCoverWhereInput;
}
