import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the InputNilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-nilai',
  templateUrl: 'input-nilai.html',
})
export class InputNilaiPage {

  public namaSekolah: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputNilaiPage');
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


}
