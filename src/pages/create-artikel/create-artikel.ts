import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AddArtikelComponent } from '../../components/add-artikel/add-artikel';
import { ToolsProvider } from '../../providers/tools/tools';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-create-artikel',
  templateUrl: 'create-artikel.html',
})
export class CreateArtikelPage {
  public namaSekolah: string;
  public listArtikel: any;
  
  constructor(
    public api: ApiProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public mdlCtrl: ModalController,
    public tools: ToolsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateArtikelPage');
    this.getProfilSekolah();
    this.getListArtikel();
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    );
  }

  getListArtikel(){
    this.api.getArtikelAll().subscribe(
      data=>{
        this.listArtikel = data;
      }
    );
    // this.http.get('assets/data/artikel.json')
    // .map(res=>res.json().records)
    // .subscribe(
    //   data=>{
    //     this.listArtikel = data;
    //     // console.log(this.listArtikel);
    //   }
    // );
  }

  openEdit(id:string){
    this.tools.showAlert('info','edit article id: '+ id);
  }

  deleteArticle(id:string){
    this.tools.showAlert('info','delete article id: '+ id);
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
