/**
 * Created by zhenglu on 12/17/16.
 */
import { Routes } from '@angular/router';

import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    component: RecipeStartComponent
  },
  {
    path: ':id',
    component: RecipeDetailComponent
  },
  {
    path: 'add',
    component: RecipeEditComponent
  },
  {
    path: ':id/edit',
    component: RecipeEditComponent
  }
];
