import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MangaTagGroupType } from '../manga/manga-tag-group-type.enum';

@ObjectType()
export class MangaTagMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    dexId?: string;

    @Field(() => MangaTagGroupType, {nullable:true})
    group?: keyof typeof MangaTagGroupType;
}
