import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class ContestsApiService {
    baseUrl: string;
    baseUrlCORS: string;
    contestUrl: string;
    contesterUrl: string;
    itemUrl: string;
    largeItemUrl: string;
    addVoiceUrl: string;
    removeVoiceUrl: string;
    idContest: number;
    idContester: number;
    idItem: number;
    item: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost/elconcurso/';
        this.contestUrl = this.baseUrl + 'contest.php';
        this.contesterUrl = this.baseUrl +'contester.php';
        this.itemUrl = this.baseUrl +'item.php';
        this.largeItemUrl = this.baseUrl +'large-item.php';
        this.addVoiceUrl = this.baseUrl + 'addVoice';
        this.removeVoiceUrl = this.baseUrl + 'removeVoice';
    }

    fetchContesters(id:number): Observable<any> {
        return this.http.get(`${this.contesterUrl}?id=${id}`)
                      .map(response => response.json());
    }

    fetchContest(id: number): Observable<any> {
        return this.http.get(`${this.contestUrl}?id=${id}`)
                      .map(response => response.json());
    }

    fetchItem(id: number): Observable<any> {
        return this.http.get(`${this.itemUrl}?id=${id}`)
                      .map(response => response.json());
    }

    fetchLargeItem(id: number): Observable<any> {
        return this.http.get(`${this.largeItemUrl}?id=${id}`)
                      .map(response => response.json());
    }

    fetchText(url: string): Observable<any> {
        return this.http.get(url);
    }

}
