import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations: [ 
  	AppComponent,
  	HeaderComponent,
  	RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailsComponent,
    RecipesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}