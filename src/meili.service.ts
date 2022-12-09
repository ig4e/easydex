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

}
