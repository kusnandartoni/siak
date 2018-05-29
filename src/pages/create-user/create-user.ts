import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AddUserComponent } from '../../components/add-user/add-user';

/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  public namaSekolah: string;

  constructor(
    public http: Http, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mdlCtrl: ModalController
  ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
    this.getProfilSekolah();
  }

  getProfilSekolah(){
    this.http.get('assets/data/profilSekolah.json')
    .map(res=>res.json())
    .subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    );
  }

  popup(){
    let modal = this.mdlCtrl.create(AddUserComponent, {},{enableBackdropDismiss:false});
    modal.present();
    modal.onDidDismiss(
      data=>{
        // if(data){
          
        //   this.navCtrl.setRoot('ProfilSiswaPage');
        // }
      }
    );
   }

}
