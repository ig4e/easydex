import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MangaExternalLinks {

    @Field(() => String, {nullable:true})
    nu!: string | null;

    @Field(() => String, {nullable:true})
    al!: string | null;

    @Field(() => String, {nullable:true})
    ap!: string | null;

    @Field(() => String, {nullable:true})
    bw!: string | null;

    @Field(() => String, {nullable:true})
    kt!: string | null;

    @Field(() => String, {nullable:true})
    mu!: string | null;

    @Field(() => String, {nullable:true})
    amz!: string | null;

    @Field(() => String, {nullable:true})
    cdj!: string | null;

    @Field(() => String, {nullable:true})
    ebj!: string | null;

    @Field(() => String, {nullable:true})
    mal!: string | null;

    @Field(() => String, {nullable:true})
    raw!: string | null;

    @Field(() => String, {nullable:true})
    engtl!: string | null;
}
