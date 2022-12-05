import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCreateManyInput } from './manga-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMangaArgs {

    @Field(() => [MangaCreateManyInput], {nullable:false})
    @Type(() => MangaCreateManyInput)
    data!: Array<MangaCreateManyInput>;
}
