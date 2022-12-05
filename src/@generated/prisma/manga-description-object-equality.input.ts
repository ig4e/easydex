import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaDescriptionObjectEqualityInput {

    @Field(() => String, {nullable:true})
    en?: string;
}
