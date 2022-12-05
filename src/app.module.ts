import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MangaModule } from './manga/manga.module';
import { AppController } from './app.controller';
import { MangaWorker } from './manga/manga.worker';
import { PrismaService } from 'prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MangaModule,
  ],
  providers: [MangaWorker, PrismaService],
  controllers: [AppController],
})
export class AppModule {}