import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddUserComponent } from '../../components/add-user/add-user';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  public namaSekolah: string;

  constructor(
    public api: ApiProvider,
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
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
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
