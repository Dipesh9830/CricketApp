import { Component, OnInit } from '@angular/core';

import playersdata from './players.json'
interface Player {
    
    name: String;
    Age: any;
    
  
}
import bowlersdata from './Bowlers.json'
interface Bowler {
  name: String;
  Age: String;
  

}

@Component({
  selector: 'app-players',
  templateUrl: './Players.component.html',
  styleUrls: ['./Players.component.css']
})

export class PlayersComponent implements OnInit {

  players: Player[] = playersdata;
  bowlers: Bowler[] = bowlersdata;
  
constructor() { }

ngOnInit() {
}

}
