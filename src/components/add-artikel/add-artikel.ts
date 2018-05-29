import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ToolsProvider } from '../../providers/tools/tools';

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

  constructor(
    public render: Renderer,
    public viewCtrl: ViewController,
    public tools: ToolsProvider
  ) {
    this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'add-article-popup',true);
  }

  tambah(){
    this.tools.showAlert('info','button tambah ditekan');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }



}
