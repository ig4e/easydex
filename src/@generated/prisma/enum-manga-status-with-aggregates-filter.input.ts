import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaStatus } from './manga-status.enum';
import { NestedEnumMangaStatusWithAggregatesFilter } from './nested-enum-manga-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMangaStatusFilter } from './nested-enum-manga-status-filter.input';

@InputType()
export class EnumMangaStatusWithAggregatesFilter {

    @Field(() => MangaStatus, {nullable:true})
    equals?: keyof typeof MangaStatus;

    @Field(() => [MangaStatus], {nullable:true})
    in?: Array<keyof typeof MangaStatus>;

    @Field(() => [MangaStatus], {nullable:true})
    notIn?: Array<keyof typeof MangaStatus>;

    @Field(() => NestedEnumMangaStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMangaStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMangaStatusFilter, {nullable:true})
    _min?: NestedEnumMangaStatusFilter;

    @Field(() => NestedEnumMangaStatusFilter, {nullable:true})
    _max?: NestedEnumMangaStatusFilter;
}
