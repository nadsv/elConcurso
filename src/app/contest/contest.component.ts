import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
    selector: 'app-contest',
    templateUrl: './contest.component.html',
    styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
    item:any = {};
    url: string;
    isDataAvailable:boolean = false;
    idContest: number = 0;

    constructor(private _contestAPI: ContestsApiService) { 
        this.url = '../data/';
     }

	ngOnInit() {
		this._contestAPI.fetchContest(1)
                    .subscribe(
                        items => {  this.item = items[0]; 
                                    this.isDataAvailable = true;
                                    this._contestAPI.idContest = this.item.id;
                                    this.idContest = this._contestAPI.idContest;
                                },
                      error => {console.log('Error fetching contests'); this.isDataAvailable = true;})
    }

}
