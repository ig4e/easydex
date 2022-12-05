import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaCoverMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    dexId?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    fileName?: true;

    @Field(() => Boolean, {nullable:true})
    volume?: true;

    @Field(() => Boolean, {nullable:true})
    version?: true;

    @Field(() => Boolean, {nullable:true})
    mangaId?: true;

    @Field(() => Boolean, {nullable:true})
    mcreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    mupdatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    eupdatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    ecreatedAt?: true;
}
