import { Component, OnInit } from '@angular/core';

import matchesdata from './matches.json'
interface Matches {
    name: String;
    Venue: String;
    Score: any;
    Result: any;
   
}

  
@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

    matches: Matches[] = matchesdata;
  constructor() { }

  ngOnInit() {
  }

}
