import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contesters',
	templateUrl: './contesters.component.html',
	styleUrls: ['./contesters.component.scss']
})
export class ContestersComponent implements OnInit {
	contesters: number[];

	constructor() { 
		this.contesters = Array(3).map((x,i)=>i);
	}

	ngOnInit() {
	}

}
