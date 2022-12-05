import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagCreateManyMangaInput } from './manga-tag-create-many-manga.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaTagCreateManyMangaInputEnvelope {

    @Field(() => [MangaTagCreateManyMangaInput], {nullable:false})
    @Type(() => MangaTagCreateManyMangaInput)
    data!: Array<MangaTagCreateManyMangaInput>;
}
