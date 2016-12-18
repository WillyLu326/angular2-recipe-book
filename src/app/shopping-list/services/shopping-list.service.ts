import { Injectable } from '@angular/core';
import { Ingredient } from "../../recipes/models/ingredient";

@Injectable()
export class ShoppingListService {

  items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(ingredients: Ingredient[]) {
    Array.prototype.push.apply(this.items, ingredients);
  }

  addItem(ingredient: Ingredient) {
    this.items.push(ingredient);
  }

  editItem(oldIngredient: Ingredient, newIngredient: Ingredient) {
    this.items[this.items.indexOf(oldIngredient)] = newIngredient;
  }

  deleteItem(ingredient: Ingredient) {
    this.items.splice(this.items.indexOf(ingredient), 1);
  }
}
