import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaDescriptionCreateInput {

    @Field(() => String, {nullable:true})
    en?: string;
}
