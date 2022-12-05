import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaCoverCountOrderByAggregateInput } from './manga-cover-count-order-by-aggregate.input';
import { MangaCoverAvgOrderByAggregateInput } from './manga-cover-avg-order-by-aggregate.input';
import { MangaCoverMaxOrderByAggregateInput } from './manga-cover-max-order-by-aggregate.input';
import { MangaCoverMinOrderByAggregateInput } from './manga-cover-min-order-by-aggregate.input';
import { MangaCoverSumOrderByAggregateInput } from './manga-cover-sum-order-by-aggregate.input';

@InputType()
export class MangaCoverOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dexId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mangaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mcreatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mupdatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eupdatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ecreatedAt?: keyof typeof SortOrder;

    @Field(() => MangaCoverCountOrderByAggregateInput, {nullable:true})
    _count?: MangaCoverCountOrderByAggregateInput;

    @Field(() => MangaCoverAvgOrderByAggregateInput, {nullable:true})
    _avg?: MangaCoverAvgOrderByAggregateInput;

    @Field(() => MangaCoverMaxOrderByAggregateInput, {nullable:true})
    _max?: MangaCoverMaxOrderByAggregateInput;

    @Field(() => MangaCoverMinOrderByAggregateInput, {nullable:true})
    _min?: MangaCoverMinOrderByAggregateInput;

    @Field(() => MangaCoverSumOrderByAggregateInput, {nullable:true})
    _sum?: MangaCoverSumOrderByAggregateInput;
}
