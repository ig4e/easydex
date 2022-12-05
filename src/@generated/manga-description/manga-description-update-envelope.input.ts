import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaDescriptionCreateInput } from './manga-description-create.input';
import { Type } from 'class-transformer';
import { MangaDescriptionUpdateInput } from './manga-description-update.input';

@InputType()
export class MangaDescriptionUpdateEnvelopeInput {

    @Field(() => MangaDescriptionCreateInput, {nullable:true})
    @Type(() => MangaDescriptionCreateInput)
    set?: MangaDescriptionCreateInput;

    @Field(() => MangaDescriptionUpdateInput, {nullable:true})
    @Type(() => MangaDescriptionUpdateInput)
    update?: MangaDescriptionUpdateInput;
}
