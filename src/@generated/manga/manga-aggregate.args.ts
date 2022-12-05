import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';
import { Type } from 'class-transformer';
import { MangaOrderByWithRelationInput } from './manga-order-by-with-relation.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaCountAggregateInput } from './manga-count-aggregate.input';
import { MangaAvgAggregateInput } from './manga-avg-aggregate.input';
import { MangaSumAggregateInput } from './manga-sum-aggregate.input';
import { MangaMinAggregateInput } from './manga-min-aggregate.input';
import { MangaMaxAggregateInput } from './manga-max-aggregate.input';

@ArgsType()
export class MangaAggregateArgs {

    @Field(() => MangaWhereInput, {nullable:true})
    @Type(() => MangaWhereInput)
    where?: MangaWhereInput;

    @Field(() => [MangaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MangaOrderByWithRelationInput>;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    cursor?: MangaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MangaCountAggregateInput, {nullable:true})
    _count?: MangaCountAggregateInput;

    @Field(() => MangaAvgAggregateInput, {nullable:true})
    _avg?: MangaAvgAggregateInput;

    @Field(() => MangaSumAggregateInput, {nullable:true})
    _sum?: MangaSumAggregateInput;

    @Field(() => MangaMinAggregateInput, {nullable:true})
    _min?: MangaMinAggregateInput;

    @Field(() => MangaMaxAggregateInput, {nullable:true})
    _max?: MangaMaxAggregateInput;
}
