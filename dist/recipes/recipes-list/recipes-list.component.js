"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_1 = require('../../models/recipe');
var RecipesListComponent = (function () {
    function RecipesListComponent() {
        this.recipes = [
            new recipe_1.Recipe('Pasta', 'Very soft', 'http://images.media-allrecipes.com/images/56589.png', []),
            new recipe_1.Recipe('Burger', 'Very tasty', 'http://images.media-allrecipes.com/images/58656.png', [])
        ];
        this.recipeSelected = new core_1.EventEmitter();
    }
    RecipesListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RecipesListComponent.prototype, "recipeSelected", void 0);
    RecipesListComponent = __decorate([
        core_1.Component({
            selector: 'recipes-list',
            templateUrl: './app/recipes/recipes-list/recipes-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RecipesListComponent);
    return RecipesListComponent;
}());
exports.RecipesListComponent = RecipesListComponent;
//# sourceMappingURL=recipes-list.component.js.map