import { Injectable } from '@nestjs/common';
import axios from 'axios';
import e from 'express';
import { PrismaService } from 'prisma.service';

@Injectable()
export class MangaWorker {
  constructor(private readonly prisma: PrismaService) {}

  async startFullScrape() {
    const orderList: {
      orderBy: string;
      order: 'desc' | 'asc';
    }[] = [
      { orderBy: 'relevance', order: 'desc' },

      { orderBy: 'latestUploadedChapter', order: 'desc' },
      { orderBy: 'latestUploadedChapter', order: 'asc' },

      { orderBy: 'title', order: 'desc' },
      { orderBy: 'title', order: 'asc' },

      { orderBy: 'rating', order: 'desc' },
      { orderBy: 'rating', order: 'asc' },

      { orderBy: 'followedCount', order: 'desc' },
      { orderBy: 'followedCount', order: 'asc' },

      { orderBy: 'createdAt', order: 'desc' },
      { orderBy: 'createdAt', order: 'asc' },

      { orderBy: 'year', order: 'desc' },
      { orderBy: 'year', order: 'asc' },
    ];

    for (let orderType of orderList) {
      await this.scrapeMDTitles(orderType);
    }
  }

  async scrapeMDTitles({
    orderBy = 'rating',
    order = 'desc',
  }: {
    orderBy: string;
    order: 'desc' | 'asc';
  }) {
    const LIMIT = 100;

    for (let i = 0; i < 100; i++) {
      const { data: pageData } = await axios({
        url: `https://api.mangadex.org/manga?limit=${LIMIT}&offset=${
          i * LIMIT
        }&includes[]=cover_art&includes[]=author&includes[]=artist&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[${orderBy}]=${order}`,
      });

      const mangas = pageData.data;

      //console.log(mangas);

      if (pageData.result === 'ok') {
        for (let manga of mangas) {
          console.log(`GOT ${manga.id}: ${manga.attributes.title.en}`);
          if (await this.prisma.manga.count({ where: { dexId: manga.id } })) {
            console.log(`DUP ${manga.id}: ${manga.attributes.title.en}`);
          } else {
            const { data: covers } = await axios({
              url: `https://api.mangadex.org/cover?order[volume]=asc&manga[]=${manga.id}&limit=100&offset=0`,
            });
            console.log(`GOT ${manga.id}: ${manga.attributes.title.en} COVERS`);

            const mangaDB = await this.prisma.manga.create({
              data: {
                dexId: manga.id,
                title: {
                  en: manga.attributes.title.en,
                  ja: manga.attributes.title.ja,
                  ko: manga.attributes.title.ko,
                  zh: manga.attributes.title.zh,
                  zh_hk: manga.attributes.title['zh-hk'],
                  ja_ro: manga.attributes.title['ja-ro'],
                  ko_ro: manga.attributes.title['ko-ro'],
                  zh_ro: manga.attributes.title['zh-ro'],
                },
                links: manga.attributes.links || {},
                altTitles: manga.attributes.altTitles.map(
                  (titleObj: any) => Object.values(titleObj)[0],
                ),
                description: { en: manga.attributes.description.en },
                originalLanguage: manga.attributes?.originalLanguage
                  ?.toUpperCase()
                  ?.replace(/\-/g, '_'),
                contentRating: manga.attributes?.contentRating?.toUpperCase(),
                releaseYear: Number(manga.attributes.year),
                status: manga.attributes?.status?.toUpperCase(),
                mcreatedAt: new Date(manga.attributes.createdAt),
                mupdatedAt: new Date(manga.attributes.updatedAt),
                publicationDemographic:
                  manga?.attributes?.publicationDemographic?.toUpperCase(),
                version: Number(manga.attributes.version),
                tags: {
                  connectOrCreate: manga.attributes.tags.map((tag: any) => ({
                    where: { dexId: tag.id },
                    create: {
                      dexId: tag.id,
                      name: { en: tag.attributes.name.en },
                      group: tag.attributes.group.toUpperCase(),
                    },
                  })),
                },
              },
            });

            await this.prisma.mangaCover.createMany({
              data: covers.data.map((cover) => ({
                mangaId: mangaDB.id,
                dexId: cover.id,
                fileName: cover.attributes.fileName,
                locale: cover.attributes.locale
                  ?.toUpperCase()
                  ?.replace(/\-/g, '_'),
                version: Number(cover.attributes.version) || 0,
                volume: Number(cover.attributes.volume) || 0,
                mcreatedAt: new Date(cover.attributes.createdAt),
                mupdatedAt: new Date(cover.attributes.updatedAt),
              })),
            });

            console.log(
              `SAVED ${manga.id}: ${manga.attributes.title.en} MANGA & COVERS`,
            );
          }
        }
      }
    }
  }

  async getMangaCovers() {}
}

//manga.attributes.tags.map((tag) => ({

//}))
