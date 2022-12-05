import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';

@InputType()
export class NestedEnumMangaTagGroupTypeFilter {

    @Field(() => MangaTagGroupType, {nullable:true})
    equals?: keyof typeof MangaTagGroupType;

    @Field(() => [MangaTagGroupType], {nullable:true})
    in?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => [MangaTagGroupType], {nullable:true})
    notIn?: Array<keyof typeof MangaTagGroupType>;

    @Field(() => NestedEnumMangaTagGroupTypeFilter, {nullable:true})
    not?: NestedEnumMangaTagGroupTypeFilter;
}
