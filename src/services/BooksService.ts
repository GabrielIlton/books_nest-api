import { InjectModel } from "@nestjs/sequelize";
import { Injectable } from "@nestjs/common";

import { BookModel } from "../infra/models/BookModel";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(BookModel)
    private bookModel: typeof BookModel   
  ) {}

  public async listBooks(): Promise<BookModel[]> {
    return this.bookModel.findAll()
  }

  public async showBook({ bookId }): Promise<BookModel> {
    return this.bookModel.findByPk(bookId)
  }

  public async createBook(book): Promise<BookModel> {
    await this.bookModel.create(book)
    
    return book
  }

  public async updateBook(book: BookModel): Promise<BookModel> {
    await this.bookModel.update(book, { where: { id: book.id }})
    
    return this.bookModel.findByPk(book.id)
  }

  public async deleteBook({ bookId }): Promise<string> {
    const book = await this.bookModel.findByPk(bookId)
    book.destroy()

    return `Livro deletado: ${bookId}`
  }
}