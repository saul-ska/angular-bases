import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-counter',
  template:`<h3>counter:{{counter}}</h3>

  <button (click)="increaseby(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseby(-1)">-1</button>`
})

export class CounterComponent {
  public title: string = 'Mi primera App de Angular';
 public counter: number = 10;


 increaseby(value:number):void{

    this.counter += value;
 }

 resetCounter():void{
  this.counter = 10;
 }

}
