import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaStatus } from './manga-status.enum';

@InputType()
export class NestedEnumMangaStatusFilter {

    @Field(() => MangaStatus, {nullable:true})
    equals?: keyof typeof MangaStatus;

    @Field(() => [MangaStatus], {nullable:true})
    in?: Array<keyof typeof MangaStatus>;

    @Field(() => [MangaStatus], {nullable:true})
    notIn?: Array<keyof typeof MangaStatus>;

    @Field(() => NestedEnumMangaStatusFilter, {nullable:true})
    not?: NestedEnumMangaStatusFilter;
}
