import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ClientService {
    private url = 'http://localhost:3000/api/'
  constructor(private http: Http) { }

getAllClients() {
        return this.http.get(`${this.url}clients`)
            .map(res => res.json());

    }
addClient(client) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}clients`, JSON.stringify(client), { headers: headers }).map(response => response.json());
    }
}