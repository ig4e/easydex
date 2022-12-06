import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async searchManga(
    query: string,
    limit: number = 50,
  ): Promise<{ id: string; score: number }[]> {
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
            score: { $meta: 'searchScore' },
          },
        },
        { $limit: limit },
      ],
    })) as any;

    return firstBatch.map((result) => ({
      id: result._id,
      score: result.score,
    }));
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
