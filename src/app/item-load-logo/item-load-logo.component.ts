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
	idContest: number;
	idContester: number;
	

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this.idContest = this._contestAPI.idContest;
		this.idContester = this._contestAPI.idContester;
		this.fullUrl = `${this._contestAPI.baseUrl}data/${this.idContest}/${this.idContester}/${this.item.url}`;
		if (this.item.type == "text") {
			this._contestAPI.fetchText(this.fullUrl)
                    .subscribe(
                        text => { this.loadText = addEllipsis(text._body); this.loading = false; },
                    	error => { console.error('Error fetching text') })
		}
	}

	onLoadImage() {
		this.loading = false;
	}

	onLoadStartVideo() {
		this.loading = false;
	}

}

function addEllipsis (str: string) {
	let temp = str.substring(0, 200);
	temp = temp.substring(0, temp.lastIndexOf(' '));
	return `${temp} ...`;
} 
