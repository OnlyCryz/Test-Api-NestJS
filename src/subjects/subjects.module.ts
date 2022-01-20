import { forwardRef, Module } from '@nestjs/common';

import { SubjectsController } from './controllers/subjects.controller';
import { SubjectsService } from './services/subjects.service';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [forwardRef(() => StudentsModule)],
  controllers: [SubjectsController],
  providers: [SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
