import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaDescriptionObjectEqualityInput } from './manga-description-object-equality.input';
import { MangaDescriptionWhereInput } from '../manga-description/manga-description-where.input';

@InputType()
export class MangaDescriptionCompositeFilter {

    @Field(() => MangaDescriptionObjectEqualityInput, {nullable:true})
    equals?: MangaDescriptionObjectEqualityInput;

    @Field(() => MangaDescriptionWhereInput, {nullable:true})
    is?: MangaDescriptionWhereInput;

    @Field(() => MangaDescriptionWhereInput, {nullable:true})
    isNot?: MangaDescriptionWhereInput;
}
