import { Injectable } from '@angular/core';
import { JokeResponse } from '../character/JokeResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {
  urlBase = 'http://api.icndb.com/jokes/random';

  getJoke(): Observable<JokeResponse>  {
    return this.http.get<JokeResponse>(this.urlBase);
  }

  constructor(private http: HttpClient) { }
}
