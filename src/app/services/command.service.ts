import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CommandService {
    private url = 'http://localhost:3000/api/'

    constructor(private /*authHttp: AuthHttp*/http: Http) { }

    getAllCommands() {
        return this.http.get(`${this.url}commands`)
            .map(res => res.json());

    }
    

    getCommandById(_id) {
        console.log(_id)
        return this.http.get(`${this.url}command/${_id}`)
            .map(res => res.json());

    }

    
    addCommand(command) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}commands`, JSON.stringify(command), { headers: headers }).map(response => response.json());
    }
    
}
