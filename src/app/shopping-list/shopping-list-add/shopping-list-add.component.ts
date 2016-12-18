import {Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from "../../recipes/models/ingredient";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item;
  @Output() cleared: EventEmitter<any> = new EventEmitter<any>();
  private isAdd: boolean = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnChanges(changes: any) {
    if (changes.item.currentValue == null) {
      this.isAdd = true;
      this.item = {name: '', amount: ''};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      // Edit
      this.shoppingListService.editItem(this.item, newIngredient);
      this.isAdd = true;
      this.onClear();
    } else {
      // Add
      this.item = newIngredient;
      this.shoppingListService.addItem(newIngredient);
      this.onClear();
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.isAdd = true;
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
