import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CartService {
    private url = 'http://localhost:3000/api/'

    constructor(private http: Http) { }
    getAllCarts() {
        return this.http.get(`${this.url}carts`)
            .map(res => res.json());

    }

    addCart(cart) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.url}carts`, JSON.stringify(cart), { headers: headers, withCredentials: true  }).map(response => response.json());
    }


    getCartById(id: number) {
        return this.http.get(`${this.url}cart/${id}`)
            .map(res => res.json());
    }

    //update books of cart 
    removeBookFromCart(cart) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        cart.isDeleted = 1
        return this.http.put(`${this.url}carts/update`, JSON.stringify(cart), { headers: headers }).map(response => response.json());

    }
}
