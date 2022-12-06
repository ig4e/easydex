import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverObjectEqualityInput } from './manga-cover-object-equality.input';
import { MangaCoverWhereInput } from '../manga-cover/manga-cover-where.input';

@InputType()
export class MangaCoverCompositeListFilter {

    @Field(() => [MangaCoverObjectEqualityInput], {nullable:true})
    equals?: Array<MangaCoverObjectEqualityInput>;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    every?: MangaCoverWhereInput;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    some?: MangaCoverWhereInput;

    @Field(() => MangaCoverWhereInput, {nullable:true})
    none?: MangaCoverWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
