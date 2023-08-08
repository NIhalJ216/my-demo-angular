import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe-1',
      'This is simply a test-1',
      'https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2.jpg'
    ),
    new Recipe(
      'A Test Recipe-2',
      'This is simply a test-2',
      'https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
