import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Joke {
  type: string;
  setup: string;
  delivery: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any?amount=10';

  constructor(private http: HttpClient) { }

  getJokes(): Observable<Joke[]> {
    return this.http.get<{jokes: Joke[]}>(this.apiUrl).pipe(
      map(response => response.jokes)
    );
  }
}