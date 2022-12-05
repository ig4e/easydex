import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaExternalLinksCreateInput } from './manga-external-links-create.input';
import { Type } from 'class-transformer';
import { MangaExternalLinksUpdateInput } from './manga-external-links-update.input';

@InputType()
export class MangaExternalLinksUpsertInput {

    @Field(() => MangaExternalLinksCreateInput, {nullable:false})
    @Type(() => MangaExternalLinksCreateInput)
    set!: MangaExternalLinksCreateInput;

    @Field(() => MangaExternalLinksUpdateInput, {nullable:false})
    @Type(() => MangaExternalLinksUpdateInput)
    update!: MangaExternalLinksUpdateInput;
}
