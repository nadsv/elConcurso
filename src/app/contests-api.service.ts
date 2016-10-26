import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContestsApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'localhost/elcontesto?id';
  }

  fetchItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/1/1.json`)
                    .map(response => response.json());
  }

  fetchContest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}=${id}`)
                    .map(response => response.json());
  }
}