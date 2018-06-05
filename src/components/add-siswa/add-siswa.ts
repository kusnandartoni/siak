import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddSiswaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-siswa',
  templateUrl: 'add-siswa.html'
})
export class AddSiswaComponent {


  constructor(
    public render: Renderer,
    public viewCtrl: ViewController
  ) {
		this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'login-modal',true);    
  }

}
