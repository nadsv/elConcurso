import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ContestsApiService } from '../contests-api.service';

@Component({
    selector: 'app-contest',
    templateUrl: './contest.component.html',
    styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
    contest: any = {};
    isDataAvailable: boolean = false;
    subContest: any;
    idContest: number;
    url: string = 'contest.php?id=';

    constructor(private contestAPI: ContestsApiService,
                private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.subContest = this.route.params.subscribe(params => {
            this.contestAPI.idContest = +params['idContest'] ? +params['idContest'] : 1;
            this.contestAPI.idContester = +params['idContester'] ? +params['idContester'] : 1;
            this.contestAPI.fetchData(this.contestAPI.apiUrl + this.url + this.contestAPI.idContest)
                .subscribe(
                    contests => { this.contest = contests[0];
                            this.isDataAvailable = true;
                            this.idContest = this.contestAPI.idContest;
                        },
                    error => { console.log('Error fetching contests'); this.isDataAvailable = true; }
                );
        });
    }

}
