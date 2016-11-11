import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-item-load-logo',
	templateUrl: './item-load-logo.component.html',
	styleUrls: ['./item-load-logo.component.scss']
})
export class ItemLoadLogoComponent implements OnInit {
	@Input() item;
	urlItem: string;
	fullUrl: string = '';
	loading: boolean = true
	loadText: string;
	

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this.fullUrl = `${this._contestAPI.baseUrl}data/${this._contestAPI.idContest}/${this._contestAPI.idContester}/${this.item.url}`;
		this.urlItem = `${this._contestAPI.baseUrlCORS}${this._contestAPI.idContest}/${this._contestAPI.idContester}/${this._contestAPI.idItem}/`;

		if (this.item.type == "text") {
			this._contestAPI.fetchText(this.fullUrl)
                    .subscribe(
                        text => { this.loadText = text._body; this.loading = false; },
                    	error => { console.log('Error fetching text') })
		}
	}

	onLoadImage() {
		this.loading = false;
	}

	onLoadStartVideo() {
		this.loading = false;
	}

}
