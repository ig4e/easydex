import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MangaExternalLinksOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    nu?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    al?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mu?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amz?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ebj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    raw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    engtl?: keyof typeof SortOrder;
}
