import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from "../services/BooksService";
import { BookModel } from "../infra/models/BookModel";

@Controller('book')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async listBooks(): Promise<BookModel[]> {
    return await this.booksService.listBooks()
  }

  @Get(':id')
  async showBook(@Param() params): Promise<BookModel> {
    return await this.booksService.showBook({ bookId: params.id })
  }

  @Post('')
  async createBook(@Body() body: BookModel): Promise<BookModel> {
    const { name, code, price } = body

    const book = await this.booksService.createBook({ name, code, price })

    return book
  }

  @Put()
  async updateBook(@Body() body: BookModel): Promise<BookModel> {
    return await this.booksService.updateBook(body)
  }

  @Delete(':id')
  async deleteBook(@Param() params): Promise<string> {
    const book = await this.booksService.deleteBook({ bookId: params.id })

    return `Livro deletado: ${params.id}`
  }
}