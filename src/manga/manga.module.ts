import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaResolver } from './manga.resolver';
import { PrismaService } from 'src/prisma.service';
import { MangaWorker } from './manga.worker';
import { MeiliService } from 'src/meili.service';

@Module({
  providers: [
    MangaResolver,
    MangaService,
    MangaWorker,
    PrismaService,
    MeiliService,
  ],
})
export class MangaModule {}
