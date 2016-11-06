import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-item-load-logo',
	templateUrl: './item-load-logo.component.html',
	styleUrls: ['./item-load-logo.component.scss']
})
export class ItemLoadLogoComponent implements OnInit {
	fullUrl: string = '';
	@Input() item;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this.fullUrl = `${this._contestAPI.baseUrl}data/${this._contestAPI.idContest}/${this.item.idContester}/${this.item.url}`;
	}

}
