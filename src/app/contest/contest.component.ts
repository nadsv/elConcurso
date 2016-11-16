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

    constructor(private contestAPI: ContestsApiService,
                private route: ActivatedRoute
    ){ 
        this.url = '../data/';
    }

	ngOnInit() {
        this.subContest = this.route.params.subscribe(params => {
            this.contestAPI.idContest = +params['idContest'] ? +params['idContest'] : 1;
            this.contestAPI.idContester = +params['idContester'] ? +params['idContester'] : 1;
            this.contestAPI.fetchContest(this.contestAPI.idContest)
                .subscribe(
                    contests => {  this.contest = contests[0]; 
                            this.isDataAvailable = true;
                            this.idContest = this.contestAPI.idContest;
                        },
                    error => {  console.log('Error fetching contests'); this.isDataAvailable = true;}
                );
        });
    }

}
