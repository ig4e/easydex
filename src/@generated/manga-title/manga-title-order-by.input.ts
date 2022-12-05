import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MangaTitleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    en?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ja?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ko?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zh_hk?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ja_ro?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ko_ro?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zh_ro?: keyof typeof SortOrder;
}
