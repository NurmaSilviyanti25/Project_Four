import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //ViewChild dekoraktor digunakan untuk mendapatkan akses ke komponen anak,
  //yang ditemukan ditemplate, sehingga anda dapat mengakses properti dan metodenya
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
 //@Output() ingredientAdded= new EventEmitter<{name:string,amount:number}>();

  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
    //console.log(this.ingredientAdded);
    //Testability
  }

}
