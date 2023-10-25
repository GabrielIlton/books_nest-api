import { Module } from '@nestjs/common';

import { DatabaseHelper } from './infra/helpers/DatabaseHelper';

import { BooksController } from './controllers/BooksController';

import { BooksService } from './services/BooksService';

@Module({
  imports: [...DatabaseHelper],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
