import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagNameCreateEnvelopeInput } from '../manga-tag-name/manga-tag-name-create-envelope.input';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';

@InputType()
export class MangaTagCreateManyMangaInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaTagNameCreateEnvelopeInput, {nullable:false})
    name!: MangaTagNameCreateEnvelopeInput;

    @Field(() => MangaTagGroupType, {nullable:false})
    group!: keyof typeof MangaTagGroupType;
}
