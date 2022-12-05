import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaUpdateManyMutationInput } from './manga-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MangaWhereInput } from './manga-where.input';

@ArgsType()
export class UpdateManyMangaArgs {

    @Field(() => MangaUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaUpdateManyMutationInput)
    data!: MangaUpdateManyMutationInput;

    @Field(() => MangaWhereInput, {nullable:true})
    @Type(() => MangaWhereInput)
    where?: MangaWhereInput;
}
