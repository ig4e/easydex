import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagNameCreateInput } from './manga-tag-name-create.input';
import { Type } from 'class-transformer';
import { MangaTagNameUpdateInput } from './manga-tag-name-update.input';

@InputType()
export class MangaTagNameUpdateEnvelopeInput {

    @Field(() => MangaTagNameCreateInput, {nullable:true})
    @Type(() => MangaTagNameCreateInput)
    set?: MangaTagNameCreateInput;

    @Field(() => MangaTagNameUpdateInput, {nullable:true})
    @Type(() => MangaTagNameUpdateInput)
    update?: MangaTagNameUpdateInput;
}
