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
    contest:any = {};
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
        this.subContest = this.route.params.subscribe(params => {
            this._contestAPI.idContest = +params['idContest'] ? +params['idContest'] : 1;
            this._contestAPI.idContester = +params['idContester'] ? +params['idContester'] : 1;
            console.log('contester', this._contestAPI.idContester);
            this._contestAPI.fetchContest(this._contestAPI.idContest)
                .subscribe(
                    contests => {  this.contest = contests[0]; 
                            this.isDataAvailable = true;
                            this.idContest = this._contestAPI.idContest;
                        },
                    error => {  console.log('Error fetching contests'); this.isDataAvailable = true;}
                );
        });
    }

}
