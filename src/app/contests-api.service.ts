import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContestsApiService {
  baseUrl: string;
  contestUrl: string;
  contesterUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost/elconcurso/';
    this.contestUrl = 'http://localhost/elconcurso/contest.php';
    this.contesterUrl = 'http://localhost/elconcurso/contester.php';
  }

  fetchContesters(id:number): Observable<any> {
    return this.http.get(`${this.contesterUrl}?id=${id}`)
                    .map(response => response.json());
  }

  fetchContest(id: number): Observable<any> { 
    return this.http.get(`${this.contestUrl}?id=${id}`)
                    .map(response => response.json());
  }
}