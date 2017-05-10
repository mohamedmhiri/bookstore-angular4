import { Category } from './caterogy';
export class Reserch {
    name?: string
    author?: string
    editionDate?: string
    edition?: string
    priceMin?: number
    priceMax?: number
    categories: Category[]
    category: null
}