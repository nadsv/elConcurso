import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
  selector: 'app-contester',
  templateUrl: './contester.component.html',
  styleUrls: ['./contester.component.scss']
})
export class ContesterComponent implements OnInit {
	@Input() contester;
	items;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		/*this._contestAPI.fetchContest(1)
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching items'));*/
	}

}
