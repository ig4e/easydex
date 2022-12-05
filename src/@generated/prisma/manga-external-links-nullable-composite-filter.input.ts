import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaExternalLinksObjectEqualityInput } from './manga-external-links-object-equality.input';
import { MangaExternalLinksWhereInput } from '../manga-external-links/manga-external-links-where.input';

@InputType()
export class MangaExternalLinksNullableCompositeFilter {

    @Field(() => MangaExternalLinksObjectEqualityInput, {nullable:true})
    equals?: MangaExternalLinksObjectEqualityInput;

    @Field(() => MangaExternalLinksWhereInput, {nullable:true})
    is?: MangaExternalLinksWhereInput;

    @Field(() => MangaExternalLinksWhereInput, {nullable:true})
    isNot?: MangaExternalLinksWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
