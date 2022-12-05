import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTagNameObjectEqualityInput {

    @Field(() => String, {nullable:false})
    en!: string;
}
