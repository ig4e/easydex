import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MangaWorker } from './manga/manga.worker';

@Controller()
export class AppController {
  constructor(private readonly mangaWorker: MangaWorker) {}

  @Get('/scrape')
  getHello(): string {
    this.mangaWorker.startFullScrape();
    return 'done';
  }
}
