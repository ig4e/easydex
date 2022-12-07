import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch';
import { PrismaService } from './prisma.service';

@Injectable()
export class MeiliService extends MeiliSearch {
  constructor(private prisma: PrismaService) {
    super({
      host: 'https://meilisearch-production-d30d.up.railway.app',
      apiKey: 'admin1234',
    });
  }
  async onAppInit() {
    console.log('[MEILI INIT]: Updating Index Settings');

    await this.index('manga').updateSettings({
      searchableAttributes: ['title.*', 'title.en', 'altTitles'],
    });

    console.log('[MEILI INIT]: Getting manga');
    const allManga = await this.prisma.manga.findMany({});
    console.log('[MEILI INIT]: Got manga');
    const mangaIndex = this.index('manga');
    console.log('[MEILI INIT]: Importing manga');
    const task = await mangaIndex.addDocuments(allManga, { primaryKey: 'id' });
    console.log(`[MEILI INIT]: Imported manga`);
  }
}
