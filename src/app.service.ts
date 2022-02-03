import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
//import { ConfigType } from '@nestjs/config';
//import config from './config';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private database: Db) {}
  getHello(): string {
    return 'Hello World!';
  }
  getUniversities() {
    const universitiesCollection = this.database.collection('universities');
    return universitiesCollection.find().toArray();
  }
}
