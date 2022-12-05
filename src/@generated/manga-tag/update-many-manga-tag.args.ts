import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagUpdateManyMutationInput } from './manga-tag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MangaTagWhereInput } from './manga-tag-where.input';

@ArgsType()
export class UpdateManyMangaTagArgs {

    @Field(() => MangaTagUpdateManyMutationInput, {nullable:false})
    @Type(() => MangaTagUpdateManyMutationInput)
    data!: MangaTagUpdateManyMutationInput;

    @Field(() => MangaTagWhereInput, {nullable:true})
    @Type(() => MangaTagWhereInput)
    where?: MangaTagWhereInput;
}
