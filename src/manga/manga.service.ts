import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';
import { BasePageInput } from './dto/manga-list-pagination.input';
import { BasePage, BasePageInfo, MangaListPage } from './entities/manga.entity';

@Injectable()
export class MangaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    filters?: MangaWhereInput,
    pagination: BasePageInput = { page: 0, perPage: 32 },
  ) {

    const pageSize = pagination.perPage ? (pagination.perPage > 32) ? 32 : pagination.perPage : 32;
    const page = pagination.page || 0;
    const offset = page * pageSize;
    console.log(pageSize)


    const totalManga = await this.prisma.manga.count({
      where: filters as any,
    });
    const totalPages = Math.round(totalManga / pageSize);

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
        include: { covers: true, tags: true },
        where: filters as any,
      }),
    };
  }
}
