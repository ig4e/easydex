import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Manga } from 'src/@generated/manga/manga.model';
import { MangaService } from './manga.service';

@Resolver(() => Manga)
export class MangaResolver {
  constructor(private readonly mangaService: MangaService) {}

  @Query(() => Manga, { name: 'manga' })
  find() {
    return this.mangaService.findAll();
  }

  @Query(() => [Manga], { name: 'mangaList' })
  findAll() {
    return this.mangaService.findAll();
  }
}
