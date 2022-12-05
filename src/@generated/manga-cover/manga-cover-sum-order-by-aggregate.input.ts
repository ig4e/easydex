import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MangaCoverSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;
}
