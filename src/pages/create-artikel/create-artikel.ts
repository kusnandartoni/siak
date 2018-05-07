import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-create-artikel',
  templateUrl: 'create-artikel.html',
})
export class CreateArtikelPage {
  public namaSekolah: string;
  public listArtikel: any;
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
        this.listArtikel = data;
        console.log(this.listArtikel);
      }
    );
  }

}
