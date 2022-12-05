import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagNameCreateEnvelopeInput } from '../manga-tag-name/manga-tag-name-create-envelope.input';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';
import { MangaCreateNestedManyWithoutTagsInput } from '../manga/manga-create-nested-many-without-tags.input';
import { MangaTagCreatemangaIDsInput } from './manga-tag-createmanga-i-ds.input';

@InputType()
export class MangaTagCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    dexId!: string;

    @Field(() => MangaTagNameCreateEnvelopeInput, {nullable:false})
    name!: MangaTagNameCreateEnvelopeInput;

    @Field(() => MangaTagGroupType, {nullable:false})
    group!: keyof typeof MangaTagGroupType;

    @Field(() => MangaCreateNestedManyWithoutTagsInput, {nullable:true})
    Manga?: MangaCreateNestedManyWithoutTagsInput;

    @Field(() => MangaTagCreatemangaIDsInput, {nullable:true})
    mangaIDs?: MangaTagCreatemangaIDsInput;
}