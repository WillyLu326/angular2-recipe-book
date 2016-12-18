import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from "../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe1: Recipe = new Recipe('Macbook', 'Macbook', 'http://cdn.breathecast.com/data/images/full/32529/macbook-pro.jpg?w=600');
  recipe2: Recipe = new Recipe('Iphone 7', 'Iphone 7', 'https://www.t-mobile.com/content/dam/tmo/en-p/cell-phones/apple-iphone-7/black/stills/carousel-apple-iphone-7-black-380x380-1.jpg');
  recipe3: Recipe = new Recipe('Apple Watch', 'Apple Watch', 'http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/S/1/S1/38/S1-38-alu-gold-sport-concrete-grid?wid=332&hei=392&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472247756419');

  recipes: Recipe[] = [this.recipe1, this.recipe2, this.recipe3];

  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
