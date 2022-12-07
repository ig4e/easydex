import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MangaModule } from './manga/manga.module';
import { AppController } from './app.controller';
import { MangaWorker } from './manga/manga.worker';
import { PrismaService } from 'src/prisma.service';
import { MeiliService } from './meili.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      introspection: true,
      cache: 'bounded',
    }),
    MangaModule,
  ],
  providers: [MangaWorker, PrismaService, MeiliService],
  controllers: [AppController],
})
export class AppModule {}
