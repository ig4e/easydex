import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaDescriptionCreateInput } from './manga-description-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaDescriptionCreateEnvelopeInput {

    @Field(() => MangaDescriptionCreateInput, {nullable:true})
    @Type(() => MangaDescriptionCreateInput)
    set?: MangaDescriptionCreateInput;
}
