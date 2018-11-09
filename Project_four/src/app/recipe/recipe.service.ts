import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  //property: class recipe
  recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate against a black background',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
[
  new Ingredient('meal',1),
  new Ingredient('tomato',2)
]),
  new Recipe('special fried rice',
  'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually',
  '../assets/img/buah.jpeg',
[
  new Ingredient('rice',1),
  new Ingredient('meal',3),
  new Ingredient('egg',1)
]),
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  //tambahkan method addIngredientShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  //tambahkan parameter pada contruktor
constructor(private slsService:ShoppingListService) { }

}
