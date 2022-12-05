import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateManyMangaInput } from './manga-cover-create-many-manga.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaCoverCreateManyMangaInputEnvelope {

    @Field(() => [MangaCoverCreateManyMangaInput], {nullable:false})
    @Type(() => MangaCoverCreateManyMangaInput)
    data!: Array<MangaCoverCreateManyMangaInput>;
}
