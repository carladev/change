import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss'],
})
export class ChangeComponent implements OnInit {
  total = 0;

  cash = [
    { value: 5, name: '5euro', imageSrc: '5eur.jpg', count: 0 },
    { value: 10, name: '10euro', imageSrc: '10eur.jpg', count: 0 },
    { value: 20, name: '20euro', imageSrc: '20eur.jpg', count: 0 },
    { value: 50, name: '50euro', imageSrc: '50eur.jpg', count: 0 },
    { value: 100, name: '100euro', imageSrc: '100eur.jpg', count: 0 },
    { value: 200, name: '200euro', imageSrc: '200eur.jpg', count: 0 },
    { value: 500, name: '500euro', imageSrc: '500eur.jpg', count: 0 },
    { value: 0.01, name: '1cent', imageSrc: '1c.jpg', count: 0 },
    { value: 0.02, name: '2cent', imageSrc: '2c.jpg', count: 0 },
    { value: 0.05, name: '5cent', imageSrc: '5c.jpg', count: 0 },
    { value: 0.1, name: '10cent', imageSrc: '10c.jpg', count: 0 },
    { value: 0.2, name: '20cent', imageSrc: '20c.jpg', count: 0 },
    { value: 0.5, name: '50cent', imageSrc: '50c.jpg', count: 0 },
    { value: 1, name: '1euro', imageSrc: '1eur.jpg', count: 0 },
    { value: 2, name: '2euro', imageSrc: '2eur.jpg', count: 0 },
  ];

  constructor() {}

  addValue(coins) {
    coins.count += 1;
    this.total += coins.value;
    console.log(this.total);
  }

  deleteTotal() {
    this.total = 0;
  }

  ngOnInit(): void {}
}
