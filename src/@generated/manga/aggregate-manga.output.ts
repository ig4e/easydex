import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaCountAggregate } from './manga-count-aggregate.output';
import { MangaAvgAggregate } from './manga-avg-aggregate.output';
import { MangaSumAggregate } from './manga-sum-aggregate.output';
import { MangaMinAggregate } from './manga-min-aggregate.output';
import { MangaMaxAggregate } from './manga-max-aggregate.output';

@ObjectType()
export class AggregateManga {

    @Field(() => MangaCountAggregate, {nullable:true})
    _count?: MangaCountAggregate;

    @Field(() => MangaAvgAggregate, {nullable:true})
    _avg?: MangaAvgAggregate;

    @Field(() => MangaSumAggregate, {nullable:true})
    _sum?: MangaSumAggregate;

    @Field(() => MangaMinAggregate, {nullable:true})
    _min?: MangaMinAggregate;

    @Field(() => MangaMaxAggregate, {nullable:true})
    _max?: MangaMaxAggregate;
}
