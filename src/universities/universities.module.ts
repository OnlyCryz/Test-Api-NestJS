import { Module } from '@nestjs/common';

import { UniversitiesController } from './controllers/universities.controller';
import { UniversitiesService } from './services/universities.service';

@Module({
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
