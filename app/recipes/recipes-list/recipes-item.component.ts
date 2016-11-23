import { Component, Input } from '@angular/core';

import { Recipe } from '../../models/recipe';
@Component({
	selector: 'recipes-item',
	templateUrl: './app/recipes/recipes-list/recipes-item.component.html'
})
export class RecipesItemComponent {
	@Input() recipeItem: Recipe;
}