import { Injectable } from '@angular/core';
import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty',
      'http://weknowyourdreams.com/images/food/food-07.jpg',
      [ new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Sausage', 3),
      new Ingredient('Caraway', 4)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
