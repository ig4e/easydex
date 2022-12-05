import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagCreateInput } from './manga-tag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMangaTagArgs {

    @Field(() => MangaTagCreateInput, {nullable:false})
    @Type(() => MangaTagCreateInput)
    data!: MangaTagCreateInput;
}
