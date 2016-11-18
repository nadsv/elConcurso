import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ContestsApiService {
    baseUrl: string;
    addVoiceUrl: string;
    removeVoiceUrl: string;
    idContest: number;
    idContester: number;
    idItem: number;
    item: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost/elconcurso/';
        this.addVoiceUrl = this.baseUrl + 'addVoice';
        this.removeVoiceUrl = this.baseUrl + 'removeVoice';
    }

    fetchData(url: string): Observable<any> {
        return this.http.get(url)
                    .map(response => response.json());
    }

    fetchText(url: string): Observable<any> {
        return this.http.get(url);
    }

    /*postVoises(url: string): Observable<any> {
        return this.http.post(url);
    }*/

}
