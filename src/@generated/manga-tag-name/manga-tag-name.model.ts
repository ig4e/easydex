import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MangaTagName {

    @Field(() => String, {nullable:false})
    en!: string;
}
