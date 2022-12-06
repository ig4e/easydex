import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateInput } from '../manga-cover/manga-cover-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaCoverListCreateEnvelopeInput {

    @Field(() => [MangaCoverCreateInput], {nullable:true})
    @Type(() => MangaCoverCreateInput)
    set?: Array<MangaCoverCreateInput>;
}
