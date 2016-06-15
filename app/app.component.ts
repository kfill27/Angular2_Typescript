import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  hairColor: string;
}

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} with {{hairColor}} hair!</h2>'
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
  hairColor= 'yellow'
}
