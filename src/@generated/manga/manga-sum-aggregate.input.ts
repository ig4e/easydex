import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    releaseYear?: true;

    @Field(() => Boolean, {nullable:true})
    version?: true;
}
