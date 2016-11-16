import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-contesters',
	templateUrl: './contesters.component.html',
	styleUrls: ['./contesters.component.scss']
})
export class ContestersComponent implements OnInit {
	contesters: number[];
	selectedIndex: number;

	constructor(private _contestAPI: ContestsApiService) {}

	ngOnInit() {
		this.selectedIndex = this._contestAPI.idContester - 1;
		this._contestAPI.fetchContesters(this._contestAPI.idContest)
                    .subscribe(
                      items => {this.contesters = items},
                      error => console.log('Error fetching contesters'));
	}

	onSelectChange() {
		this._contestAPI.idContester = this.selectedIndex + 1;
	}

}
