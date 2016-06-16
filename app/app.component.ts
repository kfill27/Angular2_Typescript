import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  hairColor: string;
}

@Component({
  selector: 'my-app',
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
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
`],
  template:`
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}} with the {{hero.hairColor}}
    </li>
  </ul>

  <h2>{{hero.name}} with {{hero.hairColor}} hair!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    <label>hairColor: </label>
    <input [(ngModel)]="hero.hairColor" placeholder="hairColor">
  </div>
  `
})

export class AppComponent {
  public heroes = HEROES;
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    hairColor: 'yellow'
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice", "hairColor": "blue" },
  { "id": 12, "name": "Narco", "hairColor": "blue" },
  { "id": 13, "name": "Bombasto", "hairColor": "blue" },
  { "id": 14, "name": "Celeritas", "hairColor": "blue" },
  { "id": 15, "name": "Magneta", "hairColor": "blue" },
  { "id": 16, "name": "RubberMan", "hairColor": "blue" },
  { "id": 17, "name": "Dynama", "hairColor": "blue" },
  { "id": 18, "name": "Dr IQ", "hairColor": "blue" },
  { "id": 19, "name": "Magma", "hairColor": "blue" },
  { "id": 20, "name": "Tornado", "hairColor": "blue" }
];
