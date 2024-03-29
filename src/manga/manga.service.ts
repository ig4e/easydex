import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { BasePageInput } from './dto/manga-list-pagination.input';
import { BasePage, BasePageInfo, MangaListPage } from './entities/manga.entity';
import { MeiliService } from 'src/meili.service';

@Injectable()
export class MangaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly meiliSearch: MeiliService,
  ) {}

  async find(filters?: MangaWhereInput) {
    return this.prisma.manga.findFirst({ where: filters as any });
  }

  async findAll(
    filters?: MangaWhereInput,
    pagination: BasePageInput = { page: 0, perPage: 32 },
    searchQuery?: string,
  ) {
    const whereQuery = { ...filters };
    const pageSize = pagination.perPage
      ? pagination.perPage > 32
        ? 32
        : pagination.perPage
      : 32;
    const page = pagination.page || 0;
    const offset = page * pageSize;

    if (searchQuery) {
      const { hits, estimatedTotalHits } = await this.meiliSearch
        .index('manga')
        .search(searchQuery, { limit: 10 });

      return {
        pageInfo: {
          currentPage: 0,
          lastPage: 0,
          hasNextPage: false,
          perPage: 10,
          total: estimatedTotalHits,
        },
        manga: hits,
      };
    }

    const totalManga = await this.prisma.manga.count({
      where: whereQuery as any,
    });
    
    const totalPages = Math.floor(totalManga / pageSize);

    const pageInfo: BasePageInfo = {
      currentPage: page,
      hasNextPage: page < totalPages,
      lastPage: totalPages,
      perPage: pageSize,
      total: totalManga,
    };

    return {
      pageInfo,
      manga: await this.prisma.manga.findMany({
        take: pageSize,
        skip: offset,
        where: whereQuery as any,
      }),
    };
  }

  async getMangaTags(mangaTagIDs: string[]) {
    return this.prisma.mangaTag.findMany({
      where: {
        id: { in: mangaTagIDs },
      },
    });
  }
}
