import { Component, OnInit } from '@angular/core';
import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-large-item',
	templateUrl: './large-item.component.html',
	styleUrls: ['./large-item.component.scss']
})
export class LargeItemComponent implements OnInit {
	name: string;
	type: string;
	url: string;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this.name = this._contestAPI.item.name;
		this.type = this._contestAPI.item.type;
		this.url = './${this._contestAPI.idContest}/${this._contestAPI.idContester}'
	}

}
