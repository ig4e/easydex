import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MangaTitle {

    @Field(() => String, {nullable:true})
    en!: string | null;

    @Field(() => String, {nullable:true})
    ja!: string | null;

    @Field(() => String, {nullable:true})
    ko!: string | null;

    @Field(() => String, {nullable:true})
    zh!: string | null;

    @Field(() => String, {nullable:true})
    zh_hk!: string | null;

    @Field(() => String, {nullable:true})
    ja_ro!: string | null;

    @Field(() => String, {nullable:true})
    ko_ro!: string | null;

    @Field(() => String, {nullable:true})
    zh_ro!: string | null;
}
