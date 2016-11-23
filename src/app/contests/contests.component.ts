import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';
import {ContestsNameFilter} from '../contests.pipe';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContestsComponent implements OnInit {
	contests: any[];
	isDataAvailable: boolean = false;
	url: string = 'contest.php';
	name: string = '';

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this._contestAPI.fetchData(this._contestAPI.baseUrl+this.url)
                    .subscribe(
                      contests => {this.contests = contests; this.isDataAvailable = true},
                      error => console.log('Error fetching contests'));
	}

}
