import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaScalarWhereInput } from './manga-scalar-where.input';
import { Type } from 'class-transformer';
import { MangaUpdateManyMutationInput } from './manga-update-many-mutation.input';

@InputType()
export class MangaUpdateManyWithWhereWithoutTagsInput {

    @Field(() => MangaScalarWhereInput, {nullable:false})
    @Type(() => MangaScalarWhereInput)
    where!: MangaScalarWhereInput;

    @Field(() => MangaUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaUpdateManyMutationInput)
    data!: MangaUpdateManyMutationInput;
}
