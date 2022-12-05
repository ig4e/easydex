import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTagWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    dexId?: string;
}
