import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Documentacion en local: http://localhost:3000/docs/ - Documentacion en Produccion: https://frozen-bastion-15010.herokuapp.com/docs/';
  }

  @Get('/universitiesTest/')
  getUniversities() {
    return this.appService.getUniversities();
  }
}
