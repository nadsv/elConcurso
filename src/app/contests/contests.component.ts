import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {
	items;
	url: string = 'contest.php';

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this._contestAPI.fetchData(this._contestAPI.baseUrl+this.url)
                    .subscribe(
                      items => {this.items = items},
                      error => console.log('Error fetching contests'));
	}

}
