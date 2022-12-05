import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaWhereInput } from './manga-where.input';

@InputType()
export class MangaRelationFilter {

    @Field(() => MangaWhereInput, {nullable:true})
    is?: MangaWhereInput;

    @Field(() => MangaWhereInput, {nullable:true})
    isNot?: MangaWhereInput;
}
