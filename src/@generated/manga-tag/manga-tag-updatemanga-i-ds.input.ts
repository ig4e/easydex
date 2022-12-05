import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaTagUpdatemangaIDsInput {

    @Field(() => [String], {nullable:true})
    set?: Array<string>;

    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}
