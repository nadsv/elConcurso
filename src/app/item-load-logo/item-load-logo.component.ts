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
	loadText: string;
	@Input() item;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this.fullUrl = `${this._contestAPI.baseUrl}data/${this._contestAPI.idContest}/${this.item.idContester}/${this.item.url}`;
		if (this.item.type == "text") {
			this._contestAPI.fetchText(this.fullUrl)
                    .subscribe(
                        text => { this.loadText = text._body },
                    	error => { console.log('Error fetching text') })
		}
	}

}
