import { Component } from '@angular/core';

import { Recipe } from '../models/recipe';

@Component({
	selector: 'recipes-component',
	templateUrl: './app/recipes/recipes.component.html'
})
export class RecipesComponent {
	selectedRecipe: Recipe;
}