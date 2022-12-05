import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MangaCoverCreateManyInput } from './manga-cover-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMangaCoverArgs {

    @Field(() => [MangaCoverCreateManyInput], {nullable:false})
    @Type(() => MangaCoverCreateManyInput)
    data!: Array<MangaCoverCreateManyInput>;
}
