import { Category } from './caterogy';
export class Book {
    _id: number
    oldPrice: number
    recentPrice: number
    availableBooks: number
    inMarket: number
    name: string
    image: string
    description: string
    editionDate: string
    author: string
    edition: string
    isDeleted: number
    commands: any[]
    category: Category
    carts: any[]
}