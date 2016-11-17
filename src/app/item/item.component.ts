import { Component, OnInit, Input } from '@angular/core';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() item;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
	}

	changeVoices(counts: any) {
		this.item.voices = counts;
	}

}

