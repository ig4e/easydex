import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from './manga-cover-where.input';
import { Type } from 'class-transformer';
import { MangaCoverOrderByWithRelationInput } from './manga-cover-order-by-with-relation.input';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaCoverCountAggregateInput } from './manga-cover-count-aggregate.input';
import { MangaCoverAvgAggregateInput } from './manga-cover-avg-aggregate.input';
import { MangaCoverSumAggregateInput } from './manga-cover-sum-aggregate.input';
import { MangaCoverMinAggregateInput } from './manga-cover-min-aggregate.input';
import { MangaCoverMaxAggregateInput } from './manga-cover-max-aggregate.input';

@ArgsType()
export class MangaCoverAggregateArgs {

    @Field(() => MangaCoverWhereInput, {nullable:true})
    @Type(() => MangaCoverWhereInput)
    where?: MangaCoverWhereInput;

    @Field(() => [MangaCoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MangaCoverOrderByWithRelationInput>;

    @Field(() => MangaCoverWhereUniqueInput, {nullable:true})
    cursor?: MangaCoverWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MangaCoverCountAggregateInput, {nullable:true})
    _count?: MangaCoverCountAggregateInput;

    @Field(() => MangaCoverAvgAggregateInput, {nullable:true})
    _avg?: MangaCoverAvgAggregateInput;

    @Field(() => MangaCoverSumAggregateInput, {nullable:true})
    _sum?: MangaCoverSumAggregateInput;

    @Field(() => MangaCoverMinAggregateInput, {nullable:true})
    _min?: MangaCoverMinAggregateInput;

    @Field(() => MangaCoverMaxAggregateInput, {nullable:true})
    _max?: MangaCoverMaxAggregateInput;
}
