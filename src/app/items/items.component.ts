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
	url: string = 'item.php?id=';

	constructor(private _contestAPI: ContestsApiService) {}

	ngOnInit() {
		this._contestAPI.fetchData(this._contestAPI.baseUrl+this.url+this.idContester)
                    .subscribe(
                      items => {this.items = items},
                      error => console.log('Error fetching items'));
	}

}
