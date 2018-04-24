import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, Platform, IonicPage } from 'ionic-angular';
import { LoginComponent } from '../../components/login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public namaSekolah:string;  
  public alamatSekolah:string;
  public telpSekolah:string;
  public faxSekolah:string;
  public emailSekolah:string;

  public artikel:any[];

  public isMD: boolean = false;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public mdlCtrl: ModalController,
    public http: Http,
    public platform: Platform
  ) {
    this.menu.enable(false);
    this.getProfilSekolah();
    this.getArticle();
    this.isMD = this.platform.is('android');
  }

  login(role:string){
    let modal = this.mdlCtrl.create(LoginComponent, {role:role},{enableBackdropDismiss:false});
    modal.present();
    modal.onDidDismiss(
      data=>{
        if(data){
          
          this.navCtrl.setRoot('ProfilSiswaPage');
        }
      }
    )
  }  

  getProfilSekolah(){
    this.http.get('assets/data/profilSekolah.json')
    .map(res=>res.json())
    .subscribe(
      data=>{
        this.namaSekolah = data.nama;
        this.alamatSekolah = data.alamat;
        this.telpSekolah = data.telp;
        this.faxSekolah = data.fax;
        this.emailSekolah = data.email;
      }
    );
  }

  getArticle(){
    this.http.get('assets/data/artikel.json')
    .map(res=>res.json().records)
    .subscribe(
      data=>{
        this.artikel = data;
      }
    );
  }



}
