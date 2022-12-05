import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';
import { PrismaService } from 'prisma.service';
import { MangaWorker } from './manga.worker';

@Module({
  providers: [MangaResolver, MangaService, PrismaService, MangaWorker],
})
export class MangaModule {}
