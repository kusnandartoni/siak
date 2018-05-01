import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/**
 * Generated class for the RaportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-raport',
  templateUrl: 'raport.html',
})
export class RaportPage {

  public namaSekolah: string;

  constructor(
    public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaportPage');
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
