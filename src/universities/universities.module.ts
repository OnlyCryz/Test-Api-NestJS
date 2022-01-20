import { forwardRef, Module } from '@nestjs/common';

import { UniversitiesController } from './controllers/universities.controller';
import { UniversitiesService } from './services/universities.service';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [forwardRef(() => StudentsModule)],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
  exports: [UniversitiesService],
})
export class UniversitiesModule {}
