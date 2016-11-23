import { Component, Input } from '@angular/core';

import { Recipe } from '../../models/recipe';
@Component({
	selector: 'recipes-details',
	templateUrl: './app/recipes/recipes-details/recipes-details.component.html'
})
export class RecipesDetailsComponent {
	@Input() selectedRecipe: Recipe;
}