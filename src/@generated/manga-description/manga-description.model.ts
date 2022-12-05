import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MangaDescription {

    @Field(() => String, {nullable:true})
    en!: string | null;
}
