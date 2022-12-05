import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaCountOrderByAggregateInput } from './manga-count-order-by-aggregate.input';
import { MangaAvgOrderByAggregateInput } from './manga-avg-order-by-aggregate.input';
import { MangaMaxOrderByAggregateInput } from './manga-max-order-by-aggregate.input';
import { MangaMinOrderByAggregateInput } from './manga-min-order-by-aggregate.input';
import { MangaSumOrderByAggregateInput } from './manga-sum-order-by-aggregate.input';

@InputType()
export class MangaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dexId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    altTitles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    originalLanguage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publicationDemographic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    releaseYear?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mcreatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mupdatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eupdatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ecreatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tagIDs?: keyof typeof SortOrder;

    @Field(() => MangaCountOrderByAggregateInput, {nullable:true})
    _count?: MangaCountOrderByAggregateInput;

    @Field(() => MangaAvgOrderByAggregateInput, {nullable:true})
    _avg?: MangaAvgOrderByAggregateInput;

    @Field(() => MangaMaxOrderByAggregateInput, {nullable:true})
    _max?: MangaMaxOrderByAggregateInput;

    @Field(() => MangaMinOrderByAggregateInput, {nullable:true})
    _min?: MangaMinOrderByAggregateInput;

    @Field(() => MangaSumOrderByAggregateInput, {nullable:true})
    _sum?: MangaSumOrderByAggregateInput;
}
