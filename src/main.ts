import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MeiliService } from './meili.service';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(PORT));
  const meiliService = app.get(MeiliService);

  meiliService.onAppInit();
}
bootstrap();
