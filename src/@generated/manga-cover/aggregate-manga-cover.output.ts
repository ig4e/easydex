import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaCoverCountAggregate } from './manga-cover-count-aggregate.output';
import { MangaCoverAvgAggregate } from './manga-cover-avg-aggregate.output';
import { MangaCoverSumAggregate } from './manga-cover-sum-aggregate.output';
import { MangaCoverMinAggregate } from './manga-cover-min-aggregate.output';
import { MangaCoverMaxAggregate } from './manga-cover-max-aggregate.output';

@ObjectType()
export class AggregateMangaCover {

    @Field(() => MangaCoverCountAggregate, {nullable:true})
    _count?: MangaCoverCountAggregate;

    @Field(() => MangaCoverAvgAggregate, {nullable:true})
    _avg?: MangaCoverAvgAggregate;

    @Field(() => MangaCoverSumAggregate, {nullable:true})
    _sum?: MangaCoverSumAggregate;

    @Field(() => MangaCoverMinAggregate, {nullable:true})
    _min?: MangaCoverMinAggregate;

    @Field(() => MangaCoverMaxAggregate, {nullable:true})
    _max?: MangaCoverMaxAggregate;
}
