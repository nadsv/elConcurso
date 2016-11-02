import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-contester',
	templateUrl: './contester.component.html',
	styleUrls: ['./contester.component.scss']
})
export class ContesterComponent implements OnInit {
	@Input() contester;

	constructor() { }

	ngOnInit() {
	}

}
