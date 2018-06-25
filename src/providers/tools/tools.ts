// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ToolsProvider {

  constructor(
    // public http: HttpClient,
    public alrt: AlertController
  ) {
    // console.log('Hello ToolsProvider Provider');
  }

  showAlert(judul:string, pesan:string){
    let alert = this.alrt.create({
      title: '<center>'+judul+'</center>',
      message: '<center>'+pesan+'</center>',
      buttons:['Ok']
    });
    alert.present();
  }

  showConfirm(msg: string, title: string, cc: string, ok:string): any{
    let alert = this.alrt.create({
      title: title,
      message: msg,
      buttons: [{
        text: cc,
        role: 'cancel',
        handler: () => {
          alert.dismiss(false);
          return false;
        }
      },{
        text: ok,
        handler: ()=>{
          alert.dismiss(true);
          return false;          
        }
      }]
    });
    return alert;
  }

}
