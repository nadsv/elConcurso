import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-large-item',
	templateUrl: './large-item.component.html',
	styleUrls: ['./large-item.component.scss']
})
export class LargeItemComponent implements OnInit {
	subItem: any;
    idItem: number;
    item: any = {};

	constructor(private _contestAPI: ContestsApiService,
				private route: ActivatedRoute) { 
	}

	ngOnInit() {
        this.subItem = this.route.params.subscribe(params => {
            this._contestAPI.idItem = +params['id'] ? +params['id'] : 1;
            console.log(this._contestAPI.idItem);
            this._contestAPI.fetchItem(this._contestAPI.idItem)
                .subscribe(
                    items => {  this.item = items[0]; console.log(this.item )},
                    error => {  console.log('Error fetching large item')}
                );
        });
    }

}
