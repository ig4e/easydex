import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMangaArgs {

    @Field(() => MangaWhereInput, {nullable:true})
    @Type(() => MangaWhereInput)
    where?: MangaWhereInput;
}
