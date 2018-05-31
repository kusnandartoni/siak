import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-profil-siswa',
  templateUrl: 'profil-siswa.html',
})
export class ProfilSiswaPage {

  public namaSekolah: string;

  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilSiswaPage');
    this.getProfilSekolah();
    this.menu.enable(true);
  }


  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

}
