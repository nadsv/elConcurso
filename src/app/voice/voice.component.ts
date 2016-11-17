import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
	@Input() voice;
	@Input() voices;
	@Output() onClickedFavorite = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	onClickFavorite() {
		const favorite = (+this.voice > 0)? -1 : 1;
		this.voices = +this.voices + favorite;
		this.voice = ( +this.voice > 0 ) ? 0 : 1;
		this.onClickedFavorite.emit(this.voices);
	}
}
