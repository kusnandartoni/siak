import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ToolsProvider } from '../../providers/tools/tools';

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
  public nisn: string;

  constructor(
    public render: Renderer,
    public viewCtrl: ViewController,
    public api: ApiProvider,
    public tool: ToolsProvider
  ) {
		this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'login-modal',true);    
  }

  dismiss(ret:any){
    this.viewCtrl.dismiss(ret);
  }

  add(){
    this.api.getSiswa(this.nisn).subscribe(data=>{
      // console.log(data);
      if(data.result==="0"){
        this.tool.showAlert("Warning", `siswa dengan nisn(${this.nisn}) tidak ada`)
      }else if(data.result==="1"){
        this.dismiss(this.nisn);
      }
    })
  }

}
