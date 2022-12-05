import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereInput } from './manga-tag-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMangaTagArgs {

    @Field(() => MangaTagWhereInput, {nullable:true})
    @Type(() => MangaTagWhereInput)
    where?: MangaTagWhereInput;
}
