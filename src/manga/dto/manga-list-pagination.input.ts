import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BasePageInput {
  @Field((type) => Int, { nullable: true })
  page: number;
  @Field((type) => Int, { nullable: true })
  perPage: number;
}
