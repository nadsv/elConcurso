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
	private subItem: any;
    private url: string = 'large-item.php?id='
    item: any = {};
    loadText: string;
    fullUrl: string;
    returnUrl: string;
    hiddenHdrFtr: boolean = false;

	constructor(private _contestAPI: ContestsApiService,
				private route: ActivatedRoute) { 
	}

	ngOnInit() {
        this.subItem = this.route.params.subscribe(params => {
            const idItem = +params['idItem'] ? +params['idItem'] : 1;
            const idContest = +params['idContest'] ? +params['idContest'] : 1;
            const idContester = +params['idContester'] ? +params['idContester'] : 1;

            this.returnUrl = `contest/${idContest}/${idContester}`;

            this._contestAPI.fetchData(this._contestAPI.baseUrl+this.url+idItem)
                .subscribe(
                    items => {  this.item = items[0];
                                 this.fullUrl = `${this._contestAPI.baseUrl}data/${idContest}/${idContester}/${this.item.url}`;
                                if (this.item.type == "text") {
									this._contestAPI.fetchText(this.fullUrl)
										.subscribe(
                        					text => { this.loadText = text._body },
                    						error => { console.error('Error fetching text') })
								}  
                             },
                    error => { console.error('Error fetching large item') }
                );
        });    
    }

    onClick() {
        this.hiddenHdrFtr = !this.hiddenHdrFtr;
    }

}
