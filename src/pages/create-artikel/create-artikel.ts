import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AddArtikelComponent } from '../../components/add-artikel/add-artikel';

@IonicPage()
@Component({
  selector: 'page-create-artikel',
  templateUrl: 'create-artikel.html',
})
export class CreateArtikelPage {
  public namaSekolah: string;
  public listArtikel: any;
  
  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public mdlCtrl: ModalController
  ) {
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

 popup(){
  let modal = this.mdlCtrl.create(AddArtikelComponent, {},{enableBackdropDismiss:false});
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
