import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTagCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    dexId?: true;

    @Field(() => Boolean, {nullable:true})
    group?: true;

    @Field(() => Boolean, {nullable:true})
    mangaIDs?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
