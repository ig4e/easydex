import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MangaOrderByWithRelationInput } from '../manga/manga-order-by-with-relation.input';

@InputType()
export class MangaCoverOrderByWithRelationInput {

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

    @Field(() => MangaOrderByWithRelationInput, {nullable:true})
    manga?: MangaOrderByWithRelationInput;

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
}
