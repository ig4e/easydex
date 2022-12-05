import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaExternalLinksCreateInput } from '../manga-external-links/manga-external-links-create.input';
import { Type } from 'class-transformer';
import { MangaExternalLinksUpsertInput } from '../manga-external-links/manga-external-links-upsert.input';

@InputType()
export class MangaExternalLinksNullableUpdateEnvelopeInput {

    @Field(() => MangaExternalLinksCreateInput, {nullable:true})
    @Type(() => MangaExternalLinksCreateInput)
    set?: MangaExternalLinksCreateInput;

    @Field(() => MangaExternalLinksUpsertInput, {nullable:true})
    @Type(() => MangaExternalLinksUpsertInput)
    upsert?: MangaExternalLinksUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
