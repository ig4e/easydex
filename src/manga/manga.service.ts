import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { BasePageInput } from './dto/manga-list-pagination.input';
import { BasePage, BasePageInfo, MangaListPage } from './entities/manga.entity';

@Injectable()
export class MangaService {
  constructor(private readonly prisma: PrismaService) {}

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
      const searchResult = await this.prisma.searchManga(searchQuery);
      const totalPages = Math.floor(searchResult.length / pageSize);

      return {
        pageInfo: {
          currentPage: page,
          hasNextPage: page < totalPages,
          lastPage: totalPages,
          perPage: pageSize,
          total: searchResult.length,
        },
        manga: searchResult.slice(offset, offset + pageSize),
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
