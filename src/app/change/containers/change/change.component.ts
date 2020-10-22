import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  
} from '@angular/forms';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
})
export class ChangeComponent implements OnInit {
  public change: FormGroup;
  cash = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];


  constructor(fb: FormBuilder) {
    this.change = fb.group({
      cent1: null,
      cent2: null,
      cent5: null,
      cent10: null,
      cent20: null,
      cent50: null,
      euro1: null,
      euro2: null,
      billet5: null,
      billet10: null,
      billet20: null,
      billet50: null,
      billet100: null,
      billet200: null,
      billet500: null,
    });
    this.change.valueChanges.subscribe;
  }

  addValue(name) {
    this.change.get(name).setValue(this.change.get(name).value + 1);
  }

  restValue(name) {
    this.change.get(name).setValue(this.change.get(name).value - 1);
  }
bill(change = this.change, cash=this.cash){
  for (const property in change) {
    console.log(`${property}: ${change[property]}`);

    // la idea es que una vez recorrido el objeto como he ehcho arriva en la posicion donde 
    // algun el valor no sea null se multiplique el valor * lo que vale ese posicion en el array
   for (let i = 0; i < cash.length; i++) {
     const element = cash[i];
     
   }

    if (property!=null){

  

    }

  }
}
  ngOnInit(): void {}
}
