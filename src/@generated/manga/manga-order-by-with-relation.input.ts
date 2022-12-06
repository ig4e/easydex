import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaCoverOrderByCompositeAggregateInput } from '../manga-cover/manga-cover-order-by-composite-aggregate.input';
import { MangaTitleOrderByInput } from '../manga-title/manga-title-order-by.input';
import { MangaDescriptionOrderByInput } from '../manga-description/manga-description-order-by.input';
import { MangaExternalLinksOrderByInput } from '../manga-external-links/manga-external-links-order-by.input';
import { MangaTagOrderByRelationAggregateInput } from '../manga-tag/manga-tag-order-by-relation-aggregate.input';

@InputType()
export class MangaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dexId?: keyof typeof SortOrder;

    @Field(() => MangaCoverOrderByCompositeAggregateInput, {nullable:true})
    covers?: MangaCoverOrderByCompositeAggregateInput;

    @Field(() => MangaTitleOrderByInput, {nullable:true})
    title?: MangaTitleOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    altTitles?: keyof typeof SortOrder;

    @Field(() => MangaDescriptionOrderByInput, {nullable:true})
    description?: MangaDescriptionOrderByInput;

    @Field(() => MangaExternalLinksOrderByInput, {nullable:true})
    links?: MangaExternalLinksOrderByInput;

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

    @Field(() => MangaTagOrderByRelationAggregateInput, {nullable:true})
    tags?: MangaTagOrderByRelationAggregateInput;

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
