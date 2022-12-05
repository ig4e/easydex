import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';
import { Type } from 'class-transformer';
import { MangaOrderByWithRelationInput } from './manga-order-by-with-relation.input';
import { MangaWhereUniqueInput } from './manga-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaScalarFieldEnum } from './manga-scalar-field.enum';

@ArgsType()
export class FindFirstMangaArgs {

    @Field(() => MangaWhereInput, {nullable:true})
    @Type(() => MangaWhereInput)
    where?: MangaWhereInput;

    @Field(() => [MangaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MangaOrderByWithRelationInput>;

    @Field(() => MangaWhereUniqueInput, {nullable:true})
    cursor?: MangaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MangaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MangaScalarFieldEnum>;
}
