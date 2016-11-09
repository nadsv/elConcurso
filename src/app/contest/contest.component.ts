import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

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
    subContest: any;
    idContest: number;

    constructor(private _contestAPI: ContestsApiService,
                private route: ActivatedRoute
    ){ 
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

        this.subContest = this.route.params.subscribe(params => {
            this._contestAPI.idContest = +params['id'] ? +params['id'] : 1;
            this._contestAPI.fetchContest(this._contestAPI.idContest)
                .subscribe(
                    contests => {  this.item = contests[0]; 
                            this.isDataAvailable = true;
                            this.idContest = this._contestAPI.idContest;
                        },
                    error => {  console.log('Error fetching contests'); this.isDataAvailable = true;
                });
        });
    }

}
