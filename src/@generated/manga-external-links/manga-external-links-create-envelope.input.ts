import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaExternalLinksCreateInput } from './manga-external-links-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaExternalLinksCreateEnvelopeInput {

    @Field(() => MangaExternalLinksCreateInput, {nullable:true})
    @Type(() => MangaExternalLinksCreateInput)
    set?: MangaExternalLinksCreateInput;
}
