import { Component, OnInit } from '@angular/core';

import { ContestsApiService } from '../contests-api.service';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ContestsComponent implements OnInit {
  contests: any[];
  isDataAvailable: boolean = false;
  url: string = 'contest.php';
  name: string = '';

  constructor(private _contestAPI: ContestsApiService) { }

  ngOnInit() {
    this._contestAPI.fetchData(this._contestAPI.apiUrl + this.url)
      .subscribe(
        contests => { this.contests = contests; this.isDataAvailable = true; },
        error => console.log('Error fetching contests'));
  }

}
