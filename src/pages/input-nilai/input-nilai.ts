import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-input-nilai',
  templateUrl: 'input-nilai.html',
})
export class InputNilaiPage {

  public namaSekolah: string;

  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputNilaiPage');
    this.getProfilSekolah();
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

}
