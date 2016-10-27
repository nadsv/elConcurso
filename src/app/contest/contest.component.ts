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
    idContest: number;
    url: string;

    constructor(private _contestAPI: ContestsApiService) { 
        this.idContest = 1;
        this.url = '../data/';
     }

	ngOnInit() {
		this._contestAPI.fetchContest(this.idContest)
                    .subscribe(
                      items => {this.item = items[this.idContest-1];},
                      error => console.log('Error fetching contests'));
    }

}
