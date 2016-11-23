import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
	selector: 'recipes-list',
	templateUrl: './app/recipes/recipes-list/recipes-list.component.html'
})
export class RecipesListComponent {
	recipes: Recipe[] = [
		new Recipe('Pasta', 'Very soft', 
			'http://images.media-allrecipes.com/images/56589.png',
			[]),
		new Recipe('Burger', 'Very tasty', 
			'http://images.media-allrecipes.com/images/58656.png',
			[])
	];

	@Output() recipeSelected = new EventEmitter<Recipe>();

	onSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
	}
}