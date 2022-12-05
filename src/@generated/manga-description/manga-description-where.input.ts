import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class MangaDescriptionWhereInput {

    @Field(() => [MangaDescriptionWhereInput], {nullable:true})
    AND?: Array<MangaDescriptionWhereInput>;

    @Field(() => [MangaDescriptionWhereInput], {nullable:true})
    OR?: Array<MangaDescriptionWhereInput>;

    @Field(() => [MangaDescriptionWhereInput], {nullable:true})
    NOT?: Array<MangaDescriptionWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    en?: StringNullableFilter;
}
