import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private url = 'http://localhost:3000/api/'
    constructor(private http: Http) { }

    // Get all categories from the API
    getAllCategories() {
        return this.http.get(`${this.url}categories`)
            .map(res => res.json());
    }

}
