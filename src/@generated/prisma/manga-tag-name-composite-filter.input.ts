import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTagNameObjectEqualityInput } from './manga-tag-name-object-equality.input';
import { MangaTagNameWhereInput } from '../manga-tag-name/manga-tag-name-where.input';

@InputType()
export class MangaTagNameCompositeFilter {

    @Field(() => MangaTagNameObjectEqualityInput, {nullable:true})
    equals?: MangaTagNameObjectEqualityInput;

    @Field(() => MangaTagNameWhereInput, {nullable:true})
    is?: MangaTagNameWhereInput;

    @Field(() => MangaTagNameWhereInput, {nullable:true})
    isNot?: MangaTagNameWhereInput;
}
