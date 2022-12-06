import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaCoverCreateInput } from '../manga-cover/manga-cover-create.input';
import { Type } from 'class-transformer';
import { MangaCoverUpdateManyInput } from '../manga-cover/manga-cover-update-many.input';
import { MangaCoverDeleteManyInput } from '../manga/manga-cover-delete-many.input';

@InputType()
export class MangaCoverListUpdateEnvelopeInput {

    @Field(() => [MangaCoverCreateInput], {nullable:true})
    @Type(() => MangaCoverCreateInput)
    set?: Array<MangaCoverCreateInput>;

    @Field(() => [MangaCoverCreateInput], {nullable:true})
    push?: Array<MangaCoverCreateInput>;

    @Field(() => MangaCoverUpdateManyInput, {nullable:true})
    @Type(() => MangaCoverUpdateManyInput)
    updateMany?: MangaCoverUpdateManyInput;

    @Field(() => MangaCoverDeleteManyInput, {nullable:true})
    @Type(() => MangaCoverDeleteManyInput)
    deleteMany?: MangaCoverDeleteManyInput;
}
