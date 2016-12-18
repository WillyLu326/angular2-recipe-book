import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from "../models/recipe";
import { ActivatedRoute, Router } from '@angular/router';

import { ShoppingListService } from "../../shopping-list/services/shopping-list.service";
import {RecipeService} from "../services/recipe.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private subcription: Subscription;
  selectedRecipe: Recipe;
  recipeId: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subcription = this.route.params.subscribe(
      (param: any) => {
        this.recipeId = param['id'];
        this.selectedRecipe = this.recipeService.getRecipes()[this.recipeId];
      }
    )
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeId, 'edit']);
  }

  onDelete(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe);
    this.router.navigate(['/recipes']);
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
