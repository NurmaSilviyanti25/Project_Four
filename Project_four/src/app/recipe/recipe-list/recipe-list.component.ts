import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
  // recipes:Recipe[]=[
  //   new Recipe('A Test Recipe','This is simply a test',
  // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  // new Recipe('A Test Recipe two','This is simply a test','../assets/img/buah.jpeg'),
  // ];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe();
  }

  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
