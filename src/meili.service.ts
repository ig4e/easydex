import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch';
import { PrismaService } from './prisma.service';

@Injectable()
export class MeiliService extends MeiliSearch {
  constructor(private prisma: PrismaService) {
    super({
      host: 'http://13.36.37.93:7700/',
      apiKey: 'admin1234',
    });
  }

  async onAppInit() {
    console.log('[MEILI INIT]: Updating Index Settings');

    await this.index('manga').updateSettings({
      searchableAttributes: ['title.*', 'title.en', 'altTitles'],
    });

    const mangaIndex = this.index('manga');
    
    console.log('[MEILI INIT]: Importing manga');

    await mangaIndex.addDocuments(await this.prisma.manga.findMany({}), {
      primaryKey: 'id',
    });

    console.log(`[MEILI INIT]: Imported manga`);
  }
}
