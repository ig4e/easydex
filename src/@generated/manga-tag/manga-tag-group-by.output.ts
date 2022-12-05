import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';
import { MangaTagCountAggregate } from './manga-tag-count-aggregate.output';
import { MangaTagMinAggregate } from './manga-tag-min-aggregate.output';
import { MangaTagMaxAggregate } from './manga-tag-max-aggregate.output';

@ObjectType()
export class MangaTagGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaTagGroupType, {nullable:false})
    group!: keyof typeof MangaTagGroupType;

    @Field(() => [String], {nullable:true})
    mangaIDs?: Array<string>;

    @Field(() => MangaTagCountAggregate, {nullable:true})
    _count?: MangaTagCountAggregate;

    @Field(() => MangaTagMinAggregate, {nullable:true})
    _min?: MangaTagMinAggregate;

    @Field(() => MangaTagMaxAggregate, {nullable:true})
    _max?: MangaTagMaxAggregate;
}
