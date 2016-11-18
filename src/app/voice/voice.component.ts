import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContestsApiService } from '../contests-api.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
	@Input() item;
	@Output() onClickedFavorite = new EventEmitter<number>();
	private url: string = 'addVoice.php';

	constructor(private _contestAPI: ContestsApiService) { }

	ngOnInit() {
	}

	onClickFavorite() {	
		this.item.voices = this.calcVoices(+this.item.voice, +this.item.voices);
		this.item.voice = this.changeVoice(+this.item.voice);
		this.onClickedFavorite.emit(this.item.voices);
		this.addVoice(this._contestAPI.baseUrl+this.url);
	}

	private addVoice(url: string)  {
		const idItem = {idItem: this.item.id};
		this._contestAPI.saveData(url, { idItem })
                    .subscribe(
                      items => {this.item = items},
                      error => console.log('Error adding voice'));
	}

	private changeVoice(voice: number): number {
		return ( voice > 0 ) ? 0 : 1;
	}

	private calcVoices(voice: number, voices: number) {
		const favorite = (voice > 0)? -1 : 1;
		return voices + favorite;
	}
}
