import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaTagNameOrderByInput } from '../manga-tag-name/manga-tag-name-order-by.input';
import { MangaOrderByRelationAggregateInput } from '../manga/manga-order-by-relation-aggregate.input';

@InputType()
export class MangaTagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dexId?: keyof typeof SortOrder;

    @Field(() => MangaTagNameOrderByInput, {nullable:true})
    name?: MangaTagNameOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    group?: keyof typeof SortOrder;

    @Field(() => MangaOrderByRelationAggregateInput, {nullable:true})
    Manga?: MangaOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    mangaIDs?: keyof typeof SortOrder;
}
