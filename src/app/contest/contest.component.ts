import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
	items;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this._contestAPI.fetchContest(1)
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching contests'));
  }

}
