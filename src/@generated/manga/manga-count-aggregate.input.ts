import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MangaCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    dexId?: true;

    @Field(() => Boolean, {nullable:true})
    altTitles?: true;

    @Field(() => Boolean, {nullable:true})
    originalLanguage?: true;

    @Field(() => Boolean, {nullable:true})
    publicationDemographic?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    releaseYear?: true;

    @Field(() => Boolean, {nullable:true})
    contentRating?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    version?: true;

    @Field(() => Boolean, {nullable:true})
    mcreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    mupdatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    eupdatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    ecreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    tagIDs?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
