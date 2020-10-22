import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormControlName,
  RequiredValidator,
} from '@angular/forms';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
})
export class ChangeComponent implements OnInit {
  public change: FormGroup;
  cambio: number;

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

  ngOnInit(): void {}
}
