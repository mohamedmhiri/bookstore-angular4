import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class BookService {
    private url = 'http://localhost:3000/api/'

    constructor(private /*authHttp: AuthHttp*/http: Http) { }

    getAllBooks() {
        return this.http.get(`${this.url}books`)
            .map(res => res.json());

    }

    getBookAdvancedSearch(book) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}books/advancedSearch`, JSON.stringify(book), { headers: headers })
            .map(res => res.json());
    }
    getBookRapidSearch(book) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}books/rapidSearch`, JSON.stringify(book), { headers: headers })
            .map(res => res.json());
    }
    getData(books): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(books);
            }, 2000);
        });
    }


    getBookById(_id) {
        return this.http.get(`${this.url}books/${_id}/book`)
            .map(res => res.json());

    }

    getManyBooks(ids) {
        return this.http.get(`${this.url}books/${ids}/many`)
            .map(res => res.json());

    }

    addBook(book) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}books`, JSON.stringify(book), { headers: headers }).map(response => response.json());
    }

    removeBook(book) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(book);
        return this.http.put(`${this.url}books/${book._id}/delete`, JSON.stringify(book), { headers: headers }).map(response => response.json());


    }

    updateBook(book) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.url}books/${book._id}/update`, JSON.stringify(book), { headers: headers }).map(response => response.json());

    }
}
