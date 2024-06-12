import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'ironman';
  age: number = 38;

  get capitalizedName ():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero (name:string) {
    this.name = name;
  }

  changeAge (age:number) {
    this.age = age;
  }
}
