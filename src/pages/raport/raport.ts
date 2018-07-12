import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-raport',
  templateUrl: 'raport.html',
})
export class RaportPage {

  public namaSekolah: string;
  
  public dataNilai = [];
  public tahunAjar =[];

  public smt:string;
  public thn:string;

  public nisn:string;

  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public stg:Storage
  ) {
    this.setTahunAjar();
    this.stg.get('nisn').then(a=>{
      this.nisn = a;
    });
  }

  ionViewDidLoad() {
    this.getProfilSekolah();    
  }

  setTahunAjar(){
    let d = new Date();
    let th = parseInt(d.getFullYear().toString());
    for (let i =0 ; i<6 ; i++){
      let it = {
        value : th,
        name : th + '/' + (th+1)
      }
      this.tahunAjar.push(it);
      th--;
    }
    console.log(this.tahunAjar);
  }

  getPeriode(){
    if(this.smt==='1'){
      return '2';
    }else if(this.smt==='2'){
      return '1';
    }
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

  getNilaiSiswa(){
    let data = {
      nisn: this.nisn,
      periode: this.thn+''+this.getPeriode()
    };
    this.api.getNilaiSiswa(data).subscribe(res=>{
      // console.log(res);
      this.dataNilai=res;
    });
  }

  check(){
    if(this.thn && this.smt){
      this.getNilaiSiswa();
    }
  }

}
