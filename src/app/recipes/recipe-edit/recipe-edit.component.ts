import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Recipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe( params => {
      this.recipeId = params['id'];
      this.recipe = this.recipeService.getRecipes()[this.recipeId];
    });
  }

  onSubmit(value: Recipe) {
    console.log(value);
  }

}
