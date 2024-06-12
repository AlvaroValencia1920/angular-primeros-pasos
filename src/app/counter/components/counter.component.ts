import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <p>{{counter}}</p>
    <button (click)="modificarValor(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="modificarValor(-1)">-1</button>
    
    `
})
export class CounterComponent {
    counter = 10;
    
    modificarValor (value:number):void{
        this.counter += value;
    }

    resetValue(){
        this.counter = 10;
    }

}