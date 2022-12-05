import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaExternalLinksCreateInput } from '../manga-external-links/manga-external-links-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaExternalLinksNullableCreateEnvelopeInput {

    @Field(() => MangaExternalLinksCreateInput, {nullable:true})
    @Type(() => MangaExternalLinksCreateInput)
    set?: MangaExternalLinksCreateInput;
}
