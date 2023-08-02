import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2.jpg'
    ),
  ];
}
