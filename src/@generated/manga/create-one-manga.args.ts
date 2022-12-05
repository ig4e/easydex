import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCreateInput } from './manga-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMangaArgs {

    @Field(() => MangaCreateInput, {nullable:false})
    @Type(() => MangaCreateInput)
    data!: MangaCreateInput;
}
