import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Context,
  Parent,
} from '@nestjs/graphql';
import { MangaCover } from 'src/@generated/manga-cover/manga-cover.model';
import { MangaTag } from 'src/@generated/manga-tag/manga-tag.model';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { Manga } from 'src/@generated/manga/manga.model';
import { BasePageInput } from './dto/manga-list-pagination.input';
import { MangaListPage } from './entities/manga.entity';
import { MangaService } from './manga.service';

@Resolver(() => Manga)
export class MangaResolver {
  constructor(private readonly mangaService: MangaService) {}

  @Query(() => Manga, { name: 'manga' })
  find(
    @Args('filters', { type: () => MangaWhereInput, nullable: true })
    filters?: MangaWhereInput,
  ) {
    return this.mangaService.find(filters);
  }

  @Query(() => MangaListPage, { name: 'mangaList' })
  findAll(
    @Args('filters', { type: () => MangaWhereInput, nullable: true })
    filters?: MangaWhereInput,
    @Args('pagination', { type: () => BasePageInput, nullable: true })
    pagination?: BasePageInput,
    @Args('searchQuery', { type: () => String, nullable: true })
    searchQuery?: string,
  ) {
    return this.mangaService.findAll(filters, pagination, searchQuery);
  }

  @ResolveField(() => [MangaTag], { name: 'tags' })
  getMangaTags(@Parent() manga: Manga) {
    return this.mangaService.getMangaTags(manga.tagIDs);
  }
}
