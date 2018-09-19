import { JokeFavService } from './../../shared/services/joke-fav.service';
import { Joke } from './../../shared/models/joke.model';
import { JokerService } from './../../shared/services/joker.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke-random',
  templateUrl: './joke-random.component.html',
  styleUrls: ['./joke-random.component.css']
})
export class JokeRandomComponent implements OnInit {
  randomJokes: Joke;

  constructor(private jokeService: JokerService, private jokeFavService: JokeFavService) { }

  onClickRandomJoke(): void {
    this.getRandomJoke()
  }

  getRandomJoke(): void{
    this.jokeService.getRandomJoke().subscribe((joke: Joke): void => {
      this.randomJokes = joke;
      console.log(this.randomJokes)
    })
  }
  ngOnInit(): void {
    this.getRandomJoke()
  }

  onClickSaveFavJoke(joke):void {
    this.jokeFavService.addFavJoke(joke);
  }

}
