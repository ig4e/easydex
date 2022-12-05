import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaExternalLinksCreateInput {

    @Field(() => String, {nullable:true})
    nu?: string;

    @Field(() => String, {nullable:true})
    al?: string;

    @Field(() => String, {nullable:true})
    ap?: string;

    @Field(() => String, {nullable:true})
    bw?: string;

    @Field(() => String, {nullable:true})
    kt?: string;

    @Field(() => String, {nullable:true})
    mu?: string;

    @Field(() => String, {nullable:true})
    amz?: string;

    @Field(() => String, {nullable:true})
    cdj?: string;

    @Field(() => String, {nullable:true})
    ebj?: string;

    @Field(() => String, {nullable:true})
    mal?: string;

    @Field(() => String, {nullable:true})
    raw?: string;

    @Field(() => String, {nullable:true})
    engtl?: string;
}
