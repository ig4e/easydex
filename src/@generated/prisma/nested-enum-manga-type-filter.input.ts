import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaType } from './manga-type.enum';

@InputType()
export class NestedEnumMangaTypeFilter {

    @Field(() => MangaType, {nullable:true})
    equals?: keyof typeof MangaType;

    @Field(() => [MangaType], {nullable:true})
    in?: Array<keyof typeof MangaType>;

    @Field(() => [MangaType], {nullable:true})
    notIn?: Array<keyof typeof MangaType>;

    @Field(() => NestedEnumMangaTypeFilter, {nullable:true})
    not?: NestedEnumMangaTypeFilter;
}
