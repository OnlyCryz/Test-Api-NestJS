import { forwardRef, Module } from '@nestjs/common';

import { StudentsController } from './controllers/students.controller';
import { StudentsService } from './services/students.service';
import { UniversitiesModule } from '../universities/universities.module';
@Module({
  imports: [forwardRef(() => UniversitiesModule)],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
