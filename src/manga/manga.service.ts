import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class MangaService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.manga.findMany({ include: { covers: true } });
  }
}
