import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [StudentsModule, UniversitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
