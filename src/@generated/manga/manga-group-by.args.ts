import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';
import { Type } from 'class-transformer';
import { MangaOrderByWithAggregationInput } from './manga-order-by-with-aggregation.input';
import { MangaScalarFieldEnum } from './manga-scalar-field.enum';
import { MangaScalarWhereWithAggregatesInput } from './manga-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MangaCountAggregateInput } from './manga-count-aggregate.input';
import { MangaAvgAggregateInput } from './manga-avg-aggregate.input';
import { MangaSumAggregateInput } from './manga-sum-aggregate.input';
import { MangaMinAggregateInput } from './manga-min-aggregate.input';
import { MangaMaxAggregateInput } from './manga-max-aggregate.input';

@ArgsType()
export class MangaGroupByArgs {

    @Field(() => MangaWhereInput, {nullable:true})
    @Type(() => MangaWhereInput)
    where?: MangaWhereInput;

    @Field(() => [MangaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MangaOrderByWithAggregationInput>;

    @Field(() => [MangaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MangaScalarFieldEnum>;

    @Field(() => MangaScalarWhereWithAggregatesInput, {nullable:true})
    having?: MangaScalarWhereWithAggregatesInput;

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
