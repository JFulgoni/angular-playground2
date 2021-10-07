import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource: MatTableDataSource<Game>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGames().subscribe(
      gameData => {
        this.dataSource = new MatTableDataSource(gameData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.firstPage();
        this.dataSource.filterPredicate = (data: Game, filter: string) => {
          return data.title.toLowerCase().includes(filter);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
