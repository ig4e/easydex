import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MangaCountOrderByAggregateInput {

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
}
