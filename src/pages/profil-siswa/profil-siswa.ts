import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilSiswaPage');
    this.menu.enable(true);
  }

}
