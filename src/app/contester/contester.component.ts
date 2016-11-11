import { Component, OnInit, Input } from '@angular/core';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-contester',
	templateUrl: './contester.component.html',
	styleUrls: ['./contester.component.scss']
})
export class ContesterComponent implements OnInit {
	@Input() contester;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this._contestAPI.idContester = this.contester.id;
	}

}
