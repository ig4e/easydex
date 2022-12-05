import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaCoverSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    volume?: true;

    @Field(() => Boolean, {nullable:true})
    version?: true;
}
