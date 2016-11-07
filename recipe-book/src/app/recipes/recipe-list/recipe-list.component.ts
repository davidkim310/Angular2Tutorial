import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('Test', 'Description of test', 'http://vignette4.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437', []),
  new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  ngOnInit() {
  }

}
