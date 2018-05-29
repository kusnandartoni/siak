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

}
