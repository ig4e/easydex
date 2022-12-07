import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Manga } from './@generated/manga/manga.model';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async searchManga(query: string, limit: number = 10): Promise<Manga[]> {
    let {
      cursor: { firstBatch },
    } = (await this.$runCommandRaw({
      aggregate: 'Manga',
      explain: false,
      pipeline: [
        {
          $search: {
            index: 'default',
            text: {
              query: query,
              path: {
                wildcard: '*',
              },
            },
          },
        },
        {
          $project: {
            id: true,
            dexId: true,
            covers: true,
            title: true,
            altTitles: true,
            description: true,
            links: true,
            originalLanguage: true,
            publicationDemographic: true,
            status: true,
            releaseYear: true,
            contentRating: true,
            tags: true,
            type: true,
            version: true,
            mcreatedAt: true,
            mupdatedAt: true,
            eupdatedAt: true,
            ecreatedAt: true,
            tagIDs: true,

            score: { $meta: 'searchScore' },
          },
        },
        { $limit: limit },
      ],
    })) as any;

    return firstBatch.map((result) => {
      const serializedData = {
        ...result,
        id: result._id,
        score: result.score,

        mcreatedAt: new Date(result.mcreatedAt.$date),
        mupdatedAt: new Date(result.mupdatedAt.$date),
        eupdatedAt: new Date(result.eupdatedAt.$date),
        ecreatedAt: new Date(result.ecreatedAt.$date),
      };

      return serializedData;
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
