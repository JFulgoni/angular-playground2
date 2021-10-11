import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  gamesUrl: string = environment.backend.gamesUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getGames(): Observable<any> {
    return this.httpClient.get(this.gamesUrl);
  }
}
