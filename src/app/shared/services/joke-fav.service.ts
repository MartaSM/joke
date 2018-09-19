import { Joke } from './../models/joke.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeFavService {
  private favJokes: Array<Joke> = [];

  constructor() { }

  addFavJoke(joke: Joke):void {

    if (!this.favJokes.map(f => f.id).includes(joke.id)) {
      this.favJokes.push(joke);
    }
  }

  getFavJokes(): Array<Joke> {
    return this.favJokes;
  }

}
