import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { MangaWhereInput } from 'src/@generated/manga/manga-where.input';

@Injectable()
export class MangaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(filters: MangaWhereInput) {
    return this.prisma.manga.findMany({
      include: { covers: true, tags: true },
      where: { ...(filters as any) },
      take: 32,
    });
  }
}
