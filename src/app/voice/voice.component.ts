import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContestsApiService } from '../contests-api.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
  @Input() item;
  @Output() onClickedFavorite = new EventEmitter<number>();

  constructor(private _contestAPI: ContestsApiService) { }

  ngOnInit() { }

  onClickFavorite() {
    if (+this.item.active) {
      this.item.voices = this.calcVoices(+this.item.voice, +this.item.voices);
      this.item.voice = this.changeVoice(+this.item.voice);
      this.onClickedFavorite.emit(this.item.voices);
      this.saveVoice(this._contestAPI.apiUrl + this.saveUrlVoice(+this.item.voice));
    }
  }

  private saveVoice(url: string)  {
    const idItem = this.item.id;
    const item = JSON.stringify({ 'idItem': idItem});
    this._contestAPI.saveData(url, item)
      .subscribe(
        () => {},
        error => console.log('Error saving voice'));
  }

  private changeVoice(voice: number): number {
    return ( voice > 0 ) ? 0 : 1;
  }

  private saveUrlVoice(voice: number): string {
    const urlAddVoice = 'addVoice.php';
    const urlRemoveVoice = 'removeVoice.php';
    return ( voice > 0 ) ? urlAddVoice : urlRemoveVoice;
  }

  private calcVoices(voice: number, voices: number) {
    const favorite = (voice > 0) ? -1 : 1;
    return voices + favorite;
  }
}
