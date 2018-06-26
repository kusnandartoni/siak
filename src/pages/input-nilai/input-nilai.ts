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
  public pelajaran:any = [];

  public plj:string;
  public kls:string;

  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputNilaiPage');
    this.getProfilSekolah();
    this.api.getPelajaran().subscribe(data=>{
      console.log(data);
      this.pelajaran = data;
    })
  }

  check(){
    console.log(this.plj);
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

}
