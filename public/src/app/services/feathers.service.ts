import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Log } from '../Log'

@Injectable()
export class FeathersService {

    constructor(private _http: Http) {
        console.log('Feathers service ready ...')
    }

    getLogs() {
        return this._http.get('http://localhost:3030/logs')
            .map( res => res.json() );
    }

    addLog(log: Log) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3030/logs', JSON.stringify(log), { headers: headers})
            .map(res => res.json());
    }

    deleteLog(id: string) {
        return this._http.delete('http://localhost:3030/logs/'+id)
            .map(res => res.json());
    }

}