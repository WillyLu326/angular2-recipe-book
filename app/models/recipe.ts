import { Ingredient } from './ingredient';

export class Recipe {
	constructor(private name: string,
				private description: string,
				private imgPath: string,
				private ingredients: Ingredient[]) {}
}