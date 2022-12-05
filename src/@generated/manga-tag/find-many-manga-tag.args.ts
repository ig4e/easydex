import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaTagWhereInput } from './manga-tag-where.input';
import { Type } from 'class-transformer';
import { MangaTagOrderByWithRelationInput } from './manga-tag-order-by-with-relation.input';
import { MangaTagWhereUniqueInput } from './manga-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaTagScalarFieldEnum } from './manga-tag-scalar-field.enum';

@ArgsType()
export class FindManyMangaTagArgs {

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

    @Field(() => [MangaTagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MangaTagScalarFieldEnum>;
}
