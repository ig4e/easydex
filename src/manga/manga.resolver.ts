import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { Manga } from 'src/@generated/manga/manga.model';
import { BasePageInput } from './dto/manga-list-pagination.input';
import { MangaListPage } from './entities/manga.entity';
import { MangaService } from './manga.service';

@Resolver(() => Manga)
export class MangaResolver {
  constructor(private readonly mangaService: MangaService) {}

  @Query(() => Manga, { name: 'manga' })
  find() {
    return;
  }

  @Query(() => MangaListPage, { name: 'mangaList' })
  findAll(
    @Args('filters', { type: () => MangaWhereInput, nullable: true })
    filters?: MangaWhereInput,
    @Args('pagination', { type: () => BasePageInput, nullable: true })
    pagination?: BasePageInput,
  ) {
    return this.mangaService.findAll(filters, pagination);
  }
}
