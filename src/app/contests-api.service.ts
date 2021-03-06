import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContestsApiService {
    apiUrl: string;
    dataUrl: string;
    idContest: number;
    idContester: number;
    idItem: number;
    item: any;

    constructor(private http: Http) {
        this.apiUrl = '/elconcurso/api/';
        this.dataUrl = '/elconcurso/data/';
    }

    fetchData(url: string): Observable<any> {
        return this.http.get(url)
                    .map(response => response.json())
                    .catch(this.handleError);
    }

    fetchText(url: string): Observable<any> {
        return this.http.get(url)
                    .catch(this.handleError);
    }

    saveData(url: string, item?: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, item, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
