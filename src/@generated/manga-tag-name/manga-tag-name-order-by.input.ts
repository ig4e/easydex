import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MangaTagNameOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    en?: keyof typeof SortOrder;
}
