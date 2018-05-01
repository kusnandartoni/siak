import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProfilSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-siswa',
  templateUrl: 'profil-siswa.html',
})
export class ProfilSiswaPage {

  public namaSekolah: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController,
    public http: Http
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilSiswaPage');
    this.getProfilSekolah();
    this.menu.enable(true);
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

}
