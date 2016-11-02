import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
	@Input() idContester;
	items;

	constructor(private _contestAPI: ContestsApiService) {}

	ngOnInit() {
		this._contestAPI.fetchItem(this.idContester)
                    .subscribe(
                      items => {this.items = items},
                      error => console.log('Error fetching items'));
	}

}
