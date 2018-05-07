import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
/**
 * Generated class for the CreateArtikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-artikel',
  templateUrl: 'create-artikel.html',
})
export class CreateArtikelPage {
  public namaSekolah: string;

  listArtikel: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateArtikelPage');
    this.getProfilSekolah();
    this.getListArtikel();
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

  getListArtikel(){
    this.http.get('assets/data/artikel.json')
    .map(res=>res.json().records)
    .subscribe(
      data=>{
        console.log(data);
        this.listArtikel = data;
      }
    )
  }

}
