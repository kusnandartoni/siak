import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/**
 * Generated class for the EditSekolahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-sekolah',
  templateUrl: 'edit-sekolah.html',
})
export class EditSekolahPage {
  public namaSekolah: string;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSekolahPage');
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
