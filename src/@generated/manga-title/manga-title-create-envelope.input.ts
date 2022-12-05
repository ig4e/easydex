import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTitleCreateInput } from './manga-title-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MangaTitleCreateEnvelopeInput {

    @Field(() => MangaTitleCreateInput, {nullable:true})
    @Type(() => MangaTitleCreateInput)
    set?: MangaTitleCreateInput;
}
