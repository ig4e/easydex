import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMangaTagOrThrowArgs {

    @Field(() => MangaTagWhereUniqueInput, {nullable:false})
    @Type(() => MangaTagWhereUniqueInput)
    where!: MangaTagWhereUniqueInput;
}
