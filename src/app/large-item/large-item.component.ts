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
    idContester: number;
    idContest: number;
    item: any = {};
    fullUrl: string = '';
    loadText: string;
    returnUrl: string;

	constructor(private _contestAPI: ContestsApiService,
				private route: ActivatedRoute) { 
	}

	ngOnInit() {
        this.subItem = this.route.params.subscribe(params => {
            this.idItem = +params['idItem'] ? +params['idItem'] : 1;
            this.idContest = +params['idContest'] ? +params['idContest'] : 1;
            this.idContester = +params['idContester'] ? +params['idContester'] : 1;
            this.returnUrl = `contest/${this.idContest}/${this.idContester}`;
            this._contestAPI.fetchLargeItem(this.idItem)
                .subscribe(
                    items => {  this.item = items[0]; 
                                this.fullUrl = `${this._contestAPI.baseUrl}data/${this.idContest}/${this.idContester}/${this.item.url}`;
                                if (this.item.type == "text") {
									this._contestAPI.fetchText(this.fullUrl)
										.subscribe(
                        					text => { this.loadText = text._body },
                    						error => { console.error('Error fetching text') })
								}  
                             },
                    error => {  console.error('Error fetching large item')}
                );
        });    
    }

}
