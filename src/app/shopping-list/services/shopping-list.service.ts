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

}
