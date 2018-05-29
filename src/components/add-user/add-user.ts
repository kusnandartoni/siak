import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ToolsProvider } from '../../providers/tools/tools';

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.html'
})
export class AddUserComponent {

  text: string;

  constructor(
    public render: Renderer,
    public viewCtrl: ViewController,
    public tools: ToolsProvider
  ) {
    this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'add-user-popup',true);    
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

  tambah(){
    this.tools.showAlert('info','button tambah ditekan');
  }
}
