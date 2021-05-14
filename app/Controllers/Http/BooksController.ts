import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Book from 'App/Models/Book';
import { schema } from '@ioc:Adonis/Core/Validator';

const table = 'books';

export default class BooksController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1);
    const name = request.input('name');
    const limit = 10
    const query =  Book.query()
    .orderBy('createdAt', 'desc');

    if(name) {
      query.where('name','ILIKE', `%${name}%`);
    }

    const books = await query.paginate(page, limit);
    return response.status(200).json(books);
  }

  public async store({ request, response }: HttpContextContract) {
    

    const bookSchema = schema.create({
      name: schema.string(),
      author: schema.string(),
      caption: schema.string.optional(),
      description: schema.string.optional(),
      book_cover_url: schema.string.optional(),
    })

    const payload =  await  request.validate({ schema: bookSchema });

    const persistedBook = await Book.create(payload);

    return response.status(201).json(persistedBook);
  }

  public async show({ params, response }: HttpContextContract) {
    const books = await Database.from(table).where('id', params.id)
    return response.status(200).json(books)
  }
}
