import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagScalarWhereInput } from './manga-tag-scalar-where.input';
import { Type } from 'class-transformer';
import { MangaTagUpdateManyMutationInput } from './manga-tag-update-many-mutation.input';

@InputType()
export class MangaTagUpdateManyWithWhereWithoutMangaInput {

    @Field(() => MangaTagScalarWhereInput, {nullable:false})
    @Type(() => MangaTagScalarWhereInput)
    where!: MangaTagScalarWhereInput;

    @Field(() => MangaTagUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaTagUpdateManyMutationInput)
    data!: MangaTagUpdateManyMutationInput;
}
