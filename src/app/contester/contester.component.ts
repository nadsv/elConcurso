import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContestsApiService } from '../contests-api.service';


@Component({
  selector: 'app-contester',
  templateUrl: './contester.component.html',
  styleUrls: ['./contester.component.scss']
})
export class ContesterComponent implements OnInit {
	@Input() contesterID: number;
	items;

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
		this._contestAPI.fetchItems()
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching items'));
	}

}
