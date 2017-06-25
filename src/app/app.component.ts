import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];



@Component({
  selector: 'my-app',
  //template: `<h1>{{title}}</h1><h2>{{hero_1.name}} details!</h2><h3>{{gnight}}</h3>`,
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero_1.name}} details!</h2>
  <div><label>id: </label>{{hero_1.id}}</div>
  <div><label>name: </label>{{hero_1.name}}</div>
  <h3>{{gnight}}</h3>
  <div>
  <label>name:</label>
  <input [(ngModel)]="hero_1.name" placeholder="name">
  </div>
  <br>
  <h2>My Great Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero_1 of heroes"
  [class.selected]="hero_1 === selectedHero"
  (click)="onSelect(hero_1)">
    <span class="badge">{{hero_1.id}}</span> {{hero_1.name}}
  </li>
  </ul>
  <div *ngIf="selectedHero"> <!--去避免EXCEPTION: TypeError: Cannot read property 'name' of undefined in [null]-->
  <h2>{{selectedHero.name}} details!</h2>
<div><label>id: </label>{{selectedHero.id}}</div>
<div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    <h3>This is HERO detail</h3>
</div>
</div>
  `,
  styles: [`
  .selected {
    background-color: #770822 !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})




export class AppComponent {
  title = 'Tour of Heroes';
  //hero = 'Windstorm';
  gnight = 'Good Night My Hero';

  hero_1: Hero = {
    id: 1,
    name: 'Wonder Woman'
  };

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero_1: Hero): void {
    this.selectedHero = hero_1;
  }
}
