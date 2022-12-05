import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MangaTagName } from '../manga-tag-name/manga-tag-name.model';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';
import { Manga } from '../manga/manga.model';
import { MangaTagCount } from './manga-tag-count.output';

@ObjectType()
export class MangaTag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaTagName, {nullable:false})
    name?: MangaTagName;

    @Field(() => MangaTagGroupType, {nullable:false})
    group!: keyof typeof MangaTagGroupType;

    @Field(() => [Manga], {nullable:true})
    Manga?: Array<Manga>;

    @Field(() => [String], {nullable:true})
    mangaIDs!: Array<string>;

    @Field(() => MangaTagCount, {nullable:false})
    _count?: MangaTagCount;
}
