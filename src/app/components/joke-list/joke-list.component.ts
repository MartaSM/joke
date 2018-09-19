import { JokerService } from './../../shared/services/joker.service';
import { Joke } from './../../shared/models/joke.model';
import { JokeFavService } from './../../shared/services/joke-fav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  favJokes: Array<Joke>;

  constructor(private jokeFavService:JokeFavService) { }

  ngOnInit():void {
  }

  

}
