import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Manga } from 'src/@generated/manga/manga.model';

@ObjectType()
export class BasePageInfo {
  @Field((type) => Int)
  total: number;
  @Field((type) => Int)
  perPage: number;
  @Field((type) => Int)
  currentPage: number;
  @Field((type) => Int)
  lastPage: number;
  @Field((type) => Boolean)
  hasNextPage: boolean;
}

@ObjectType()
export class BasePage {
  @Field((type) => BasePageInfo)
  pageInfo: BasePageInfo;
}

@ObjectType()
export class MangaListPage extends BasePage {
  @Field((type) => [Manga])
  manga: Manga[];
}
