import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { Manga } from 'src/@generated/manga/manga.model';
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
    @Args('filters', { type: () => MangaWhereInput }) filters: MangaWhereInput,
  ) {
    return this.mangaService.findAll(filters);
  }
}
