import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AddSiswaComponent } from '../../components/add-siswa/add-siswa';

/**
 * Generated class for the KelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kelas',
  templateUrl: 'kelas.html',
})
export class KelasPage {
  siswaInClass:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public mdlCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KelasPage');
    this.getSiswaInClass();
  }

  optGet(){
    return{
      kd_kelas:'1a',
      tahun_ajaran:'2017/2018'
    }
  }

  option(){
    return{
      periode:'20171',
      nisn:'6',
      kd_kelas:'1a',
      tahun_ajaran:'2017/2018',
      semester:'2'
    }
  }

  addSiswa(){
    let modal = this.mdlCtrl.create(AddSiswaComponent, {ta:'', kelas:''},{enableBackdropDismiss:false});
    modal.present();
    modal.onDidDismiss(
      data=>{
        if(data){
          
          // this.navCtrl.setRoot('ProfilSiswaPage');
        }
      }
    );
    // this.api.addSiswaKelas(this.option()).subscribe(
    //   res=>{
    //     console.log(res);
    //   }
    // )
  }

  getSiswaInClass(){
    this.api.getSiswaKelas(this.optGet()).subscribe(
      data=>{
        // console.log(data);
        this.siswaInClass = data;
      }
    )
  }


}
