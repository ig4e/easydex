import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaTagCountAggregate } from './manga-tag-count-aggregate.output';
import { MangaTagMinAggregate } from './manga-tag-min-aggregate.output';
import { MangaTagMaxAggregate } from './manga-tag-max-aggregate.output';

@ObjectType()
export class AggregateMangaTag {

    @Field(() => MangaTagCountAggregate, {nullable:true})
    _count?: MangaTagCountAggregate;

    @Field(() => MangaTagMinAggregate, {nullable:true})
    _min?: MangaTagMinAggregate;

    @Field(() => MangaTagMaxAggregate, {nullable:true})
    _max?: MangaTagMaxAggregate;
}
