import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

const table = 'books';

export default class BooksController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 10
    const books = await Database.from(table).paginate(page, limit)
    return response.status(200).json(books)
  }

  public async store({ request, response }: HttpContextContract) {
    const book = request.body;
    return response.status(201).json(book)
  }

  public async show({ params, response }: HttpContextContract) {
    const books = await Database.from(table).where('id', params.id)
    return response.status(200).json(books)
  }
}
