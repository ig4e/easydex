import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaPublicationDemographicType } from './manga-publication-demographic-type.enum';

@InputType()
export class NullableEnumMangaPublicationDemographicTypeFieldUpdateOperationsInput {

    @Field(() => MangaPublicationDemographicType, {nullable:true})
    set?: keyof typeof MangaPublicationDemographicType;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
