import { DateTime } from 'luxon'
import { BaseModel, column  } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public book_cover_url?: string

  @column()
  public name: string

  @column()
  public author: string

  @column()
  public caption: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
