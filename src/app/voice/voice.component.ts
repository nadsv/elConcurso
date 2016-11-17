import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
	@Input() voice;

	constructor() { }

	ngOnInit() {
	}

}
