import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTitleObjectEqualityInput {

    @Field(() => String, {nullable:true})
    en?: string;

    @Field(() => String, {nullable:true})
    ja?: string;

    @Field(() => String, {nullable:true})
    ko?: string;

    @Field(() => String, {nullable:true})
    zh?: string;

    @Field(() => String, {nullable:true})
    zh_hk?: string;

    @Field(() => String, {nullable:true})
    ja_ro?: string;

    @Field(() => String, {nullable:true})
    ko_ro?: string;

    @Field(() => String, {nullable:true})
    zh_ro?: string;
}
