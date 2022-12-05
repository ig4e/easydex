import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';
import { NestedEnumMangaTagGroupTypeFilter } from './nested-enum-manga-tag-group-type-filter.input';

@InputType()
export class EnumMangaTagGroupTypeFilter {

    @Field(() => MangaTagGroupType, {nullable:true})
    equals?: keyof typeof MangaTagGroupType;

    @Field(() => [MangaTagGroupType], {nullable:true})
    in?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => [MangaTagGroupType], {nullable:true})
    notIn?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => NestedEnumMangaTagGroupTypeFilter, {nullable:true})
    not?: NestedEnumMangaTagGroupTypeFilter;
}
