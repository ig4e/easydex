import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTagNameCreateInput {

    @Field(() => String, {nullable:false})
    en!: string;
}
