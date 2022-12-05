import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverWhereInput } from './manga-cover-where.input';
import { Type } from 'class-transformer';
import { MangaCoverOrderByWithRelationInput } from './manga-cover-order-by-with-relation.input';
import { MangaCoverWhereUniqueInput } from './manga-cover-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MangaCoverScalarFieldEnum } from './manga-cover-scalar-field.enum';

@ArgsType()
export class FindFirstMangaCoverOrThrowArgs {

    @Field(() => MangaCoverWhereInput, {nullable:true})
    @Type(() => MangaCoverWhereInput)
    where?: MangaCoverWhereInput;

    @Field(() => [MangaCoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MangaCoverOrderByWithRelationInput>;

    @Field(() => MangaCoverWhereUniqueInput, {nullable:true})
    cursor?: MangaCoverWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MangaCoverScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MangaCoverScalarFieldEnum>;
}
