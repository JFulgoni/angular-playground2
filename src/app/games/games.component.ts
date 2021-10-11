import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface Game {
  id: string;
  title: string;
  short_description: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'short_description'];
  dataSource: Game[];
  otherDataSource: Game[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGames().subscribe(
      gameData => {
        this.dataSource = gameData;
      },
      error => {
        console.log(error);
      }
    );
    const game1 = {id: '1', 'title': 'World of Warcraft', short_description: 'The best game ever'}
    this.otherDataSource = [game1];
  }
}
