import { Injectable } from '@nestjs/common';
import axios from 'axios';
import e from 'express';
import { PrismaService } from 'src/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class MangaWorker {
  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_WEEK, {
    name: 'update and scrap data from md, weekly',
  })
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

    for (let i = 8; i < 100; i++) {
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

          const mangaOutdatedOrDuplicatedCheck =
            await this.prisma.manga.findUnique({
              where: { dexId: manga.id },
              select: {
                mcreatedAt: true,
                mupdatedAt: true,
                version: true,
                ecreatedAt: true,
                eupdatedAt: true,
              },
            });

          if (
            mangaOutdatedOrDuplicatedCheck &&
            mangaOutdatedOrDuplicatedCheck.version == manga.attributes.version
          ) {
            console.log(`DUP ${manga.id}: ${manga.attributes.title.en}`);
          } else {
            const { data: covers } = await axios({
              url: `https://api.mangadex.org/cover?order[volume]=asc&manga[]=${manga.id}&limit=100&offset=0`,
            });
            console.log(`GOT ${manga.id}: ${manga.attributes.title.en} COVERS`);

            try {
              const mangaDBCreateInputData = {
                covers: covers.data.map((cover: any) => {
                  const coverData = {
                    dexId: cover.id,
                    fileName: cover.attributes.fileName,
                    locale: cover.attributes.locale
                      ?.toUpperCase()
                      ?.replace(/\-/g, '_'),
                    version: Number(cover.attributes.version) || 0,
                    volume: Number(cover.attributes.volume) || 0,
                    mcreatedAt: new Date(cover.attributes.createdAt),
                    mupdatedAt: new Date(cover.attributes.updatedAt),
                  };

                  return coverData;
                }),

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
                links: {
                  al: manga.attributes?.links?.al,
                  amz: manga.attributes?.links?.amz,
                  ap: manga.attributes?.links?.ap,
                  bw: manga.attributes?.links?.bw,
                  cdj: manga.attributes?.links?.cdj,
                  ebj: manga.attributes?.links?.ebj,
                  engtl: manga.attributes?.links?.engtl,
                  kt: manga.attributes?.links?.kt,
                  mal: manga.attributes?.links?.mal,
                  mu: manga.attributes?.links?.mu,
                  raw: manga.attributes?.links?.raw,
                },
                altTitles: [
                  ...manga.attributes.altTitles.map(
                    (titleObj: any) => Object.values(titleObj)[0],
                  ),
                  ...Object.values(manga.attributes.title),
                ],
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
              };

              const mangaDB = await this.prisma.manga.upsert({
                where: {
                  dexId: manga.id,
                },
                create: mangaDBCreateInputData,
                update: mangaDBCreateInputData,
              });

              console.log(
                `SAVED ${manga.id}: ${manga.attributes.title.en} MANGA & COVERS`,
              );
            } catch (err) {
              console.log(err);
              console.log(
                `FAILED TO SAVE ${manga.id}: ${manga.attributes.title.en} MANGA & COVERS`,
              );
            }
          }
        }
      }
    }
  }

  async getMangaCovers() {}
}

//manga.attributes.tags.map((tag) => ({

//}))
