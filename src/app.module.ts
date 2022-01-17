import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [UniversitiesModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
