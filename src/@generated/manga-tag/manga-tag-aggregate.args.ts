import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereInput } from './manga-tag-where.input';
import { Type } from 'class-transformer';
import { MangaTagOrderByWithRelationInput } from './manga-tag-order-by-with-relation.input';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaTagCountAggregateInput } from './manga-tag-count-aggregate.input';
import { MangaTagMinAggregateInput } from './manga-tag-min-aggregate.input';
import { MangaTagMaxAggregateInput } from './manga-tag-max-aggregate.input';

@ArgsType()
export class MangaTagAggregateArgs {

    @Field(() => MangaTagWhereInput, {nullable:true})
    @Type(() => MangaTagWhereInput)
    where?: MangaTagWhereInput;

    @Field(() => [MangaTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MangaTagOrderByWithRelationInput>;

    @Field(() => MangaTagWhereUniqueInput, {nullable:true})
    cursor?: MangaTagWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MangaTagCountAggregateInput, {nullable:true})
    _count?: MangaTagCountAggregateInput;

    @Field(() => MangaTagMinAggregateInput, {nullable:true})
    _min?: MangaTagMinAggregateInput;

    @Field(() => MangaTagMaxAggregateInput, {nullable:true})
    _max?: MangaTagMaxAggregateInput;
}
