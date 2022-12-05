import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaTagCountOrderByAggregateInput } from './manga-tag-count-order-by-aggregate.input';
import { MangaTagMaxOrderByAggregateInput } from './manga-tag-max-order-by-aggregate.input';
import { MangaTagMinOrderByAggregateInput } from './manga-tag-min-order-by-aggregate.input';

@InputType()
export class MangaTagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dexId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mangaIDs?: keyof typeof SortOrder;

    @Field(() => MangaTagCountOrderByAggregateInput, {nullable:true})
    _count?: MangaTagCountOrderByAggregateInput;

    @Field(() => MangaTagMaxOrderByAggregateInput, {nullable:true})
    _max?: MangaTagMaxOrderByAggregateInput;

    @Field(() => MangaTagMinOrderByAggregateInput, {nullable:true})
    _min?: MangaTagMinOrderByAggregateInput;
}
