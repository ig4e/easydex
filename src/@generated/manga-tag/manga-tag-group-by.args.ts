import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereInput } from './manga-tag-where.input';
import { Type } from 'class-transformer';
import { MangaTagOrderByWithAggregationInput } from './manga-tag-order-by-with-aggregation.input';
import { MangaTagScalarFieldEnum } from './manga-tag-scalar-field.enum';
import { MangaTagScalarWhereWithAggregatesInput } from './manga-tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MangaTagCountAggregateInput } from './manga-tag-count-aggregate.input';
import { MangaTagMinAggregateInput } from './manga-tag-min-aggregate.input';
import { MangaTagMaxAggregateInput } from './manga-tag-max-aggregate.input';

@ArgsType()
export class MangaTagGroupByArgs {

    @Field(() => MangaTagWhereInput, {nullable:true})
    @Type(() => MangaTagWhereInput)
    where?: MangaTagWhereInput;

    @Field(() => [MangaTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MangaTagOrderByWithAggregationInput>;

    @Field(() => [MangaTagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MangaTagScalarFieldEnum>;

    @Field(() => MangaTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: MangaTagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MangaTagCountAggregateInput, {nullable:true})
    _count?: MangaTagCountAggregateInput;

    @Field(() => MangaTagMinAggregateInput, {nullable:true})
    _min?: MangaTagMinAggregateInput;

    @Field(() => MangaTagMaxAggregateInput, {nullable:true})
    _max?: MangaTagMaxAggregateInput;
}
