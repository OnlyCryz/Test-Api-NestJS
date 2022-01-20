import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { UniversitiesModule } from './universities/universities.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    StudentsModule,
    UniversitiesModule,
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
