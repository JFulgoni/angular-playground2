import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getGamesFromApi();
  }

  getGamesFromApi() {
    this.apiService.getGames().subscribe(
      gameData => {
        console.log(gameData);
      },
      error => {
        console.log(error);
      }
    );
  }



}
