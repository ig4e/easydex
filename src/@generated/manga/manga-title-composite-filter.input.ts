import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTitleObjectEqualityInput } from '../prisma/manga-title-object-equality.input';
import { MangaTitleWhereInput } from '../manga-title/manga-title-where.input';

@InputType()
export class MangaTitleCompositeFilter {

    @Field(() => MangaTitleObjectEqualityInput, {nullable:true})
    equals?: MangaTitleObjectEqualityInput;

    @Field(() => MangaTitleWhereInput, {nullable:true})
    is?: MangaTitleWhereInput;

    @Field(() => MangaTitleWhereInput, {nullable:true})
    isNot?: MangaTitleWhereInput;
}
