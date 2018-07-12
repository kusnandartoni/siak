import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, Platform, IonicPage, Events } from 'ionic-angular';
import { LoginComponent } from '../../components/login/login';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';


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
    public api: ApiProvider,
    public navCtrl: NavController,
    public menu: MenuController,
    public mdlCtrl: ModalController,
    public platform: Platform,
    public stg: Storage,
    public ev: Events
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
      res=>{
        if(res.role==='Wali'){
          this.api.getSiswa(res.data.username).subscribe(ret=>{
            if(res.data.password===ret.tgl_lahir.replace(/-/g, '')){
              let x= {
                role: res.role,
                nisn:res.data.username,
                name:ret.nama
              };
              this.ev.publish('login', x);
              this.stg.set('nisn',res.data.username);
              this.navCtrl.setRoot('ProfilSiswaPage');
            }
          });
        }else if(res.role==='Admin'){
          let data = this.api.getAdmin(res.data.username.toUpperCase());
          if(res.data.password===data.pass){
            let x= {
              role: res.role,
              nisn: data.nisn,
              name: data.name
            };
            this.ev.publish('login', x);
            this.stg.set('nisn',res.data.username);
            this.navCtrl.setRoot('CreateArtikelPage');
          }
        }
      }
    );
  }  

  getProfilSekolah(){
    
    this.api.getDataSekolah()
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
    this.api.getArtikelAll().subscribe(
      data=>{
        // console.log(data)
        this.artikel = data;
      }
    );
  }



}
