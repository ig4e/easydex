import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MangaTagNameWhereInput {

    @Field(() => [MangaTagNameWhereInput], {nullable:true})
    AND?: Array<MangaTagNameWhereInput>;

    @Field(() => [MangaTagNameWhereInput], {nullable:true})
    OR?: Array<MangaTagNameWhereInput>;

    @Field(() => [MangaTagNameWhereInput], {nullable:true})
    NOT?: Array<MangaTagNameWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    en?: StringFilter;
}
