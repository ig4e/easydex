import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagNameCreateInput } from './manga-tag-name-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaTagNameCreateEnvelopeInput {

    @Field(() => MangaTagNameCreateInput, {nullable:true})
    @Type(() => MangaTagNameCreateInput)
    set?: MangaTagNameCreateInput;
}
