import { Component, OnInit } from '@angular/core';

import seasonsdata from './Seasons.json'
interface Seasons {
  Year: String;
  Winner: String;
  Runnerup: any;
  Captain: String;
  

}
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 
   seasons: Seasons[] = seasonsdata

  constructor() { }

  ngOnInit() {
  }

}
