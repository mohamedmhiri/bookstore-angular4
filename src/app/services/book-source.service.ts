import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookSourceService {
    private url = 'http://localhost:3000/api/'

    constructor(private http: Http) { }


    bookUrls = [
        ['Agriculture'],
        ['Biotechnology&Pharmaceuticals'],
        ['Computers'],
        ['Construction'],
        ['Education'],
        ['Engineering'],
        ['Executive&Management'],
        ['Finance'],
        ['Food & Beverage'],
        ['Government'],
        ['Healthcare'],
        ['Human Resources'],
        ['Industrial&Manufacturing'],
        /*[''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],*/

        
    ]
    getBooksUrl() {
        return this.bookUrls
    }

    parseRssFeed(book) {
        return this.http.get(`${this.url}feed/${book}`)
            .map(res => res.json())
    }
    
}
