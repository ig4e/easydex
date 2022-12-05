import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaTitleCreateInput } from './manga-title-create.input';
import { Type } from 'class-transformer';
import { MangaTitleUpdateInput } from './manga-title-update.input';

@InputType()
export class MangaTitleUpdateEnvelopeInput {

    @Field(() => MangaTitleCreateInput, {nullable:true})
    @Type(() => MangaTitleCreateInput)
    set?: MangaTitleCreateInput;

    @Field(() => MangaTitleUpdateInput, {nullable:true})
    @Type(() => MangaTitleUpdateInput)
    update?: MangaTitleUpdateInput;
}
