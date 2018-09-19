import { JokerService } from './../../shared/services/joker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: Array<string>;

  constructor(private jokerService: JokerService) { }

  ngOnInit() {
  }

  getCategory(): void{
    this.jokerService.displayCategories().subscribe((array: Array<string>)=>{
      this.categories = array;
    })
  }

}
