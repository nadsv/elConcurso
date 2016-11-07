import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ContestsApiService {
  baseUrl: string;
  contestUrl: string;
  contesterUrl: string;
  itemUrl: string;
  idContest: number = 0;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost/elconcurso/';
    this.contestUrl = 'http://localhost/elconcurso/contest.php';
    this.contesterUrl = 'http://localhost/elconcurso/contester.php';
    this.itemUrl = 'http://localhost/elconcurso/item.php';
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

  fetchText(url: string): Observable<any> { 
    return this.http.get(url);
  }

  fetchImage(url: string): Observable<any> {
    const promise = new Promise(function(resolve, reject){
            let img = new Image()
            img.onload = ()=> resolve(url);
            img.onerror = ()=>reject(url);
            img.src = url;
        })
    let a = Observable.create(promise)
    console.log(a)
    return a;
    };
}