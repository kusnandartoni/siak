import { Component } from '@angular/core';

/**
 * Generated class for the AddArtikelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-artikel',
  templateUrl: 'add-artikel.html'
})
export class AddArtikelComponent {

  text: string;

  constructor() {
    console.log('Hello AddArtikelComponent Component');
    this.text = 'Hello World';
  }

}
