import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MangaStatus } from './manga-status.enum';

@InputType()
export class EnumMangaStatusFieldUpdateOperationsInput {

    @Field(() => MangaStatus, {nullable:true})
    set?: keyof typeof MangaStatus;
}
