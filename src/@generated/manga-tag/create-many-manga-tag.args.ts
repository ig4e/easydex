import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagCreateManyInput } from './manga-tag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMangaTagArgs {

    @Field(() => [MangaTagCreateManyInput], {nullable:false})
    @Type(() => MangaTagCreateManyInput)
    data!: Array<MangaTagCreateManyInput>;
}
