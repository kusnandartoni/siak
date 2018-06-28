import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-input-nilai',
  templateUrl: 'input-nilai.html',
})
export class InputNilaiPage {
  siswaInClass:any;  

  dataNilai=[];

  public namaSekolah: string;
  public pelajaran:any = [];

  public plj:string;
  public kls:string;
  public smt:string;
  public thn:string;

  enableAdd:boolean = false;

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
      // console.log(data);
      this.pelajaran = data;
    })
  }

  check(){
    this.dataNilai=[]
    if(this.thn && this.smt && this.kls){
      this.enableAdd = true;
      this.getSiswaInClass();
    }
  }

  getSiswaInClass(){
    let data = {
      kd_kelas:this.kls,
      tahun_ajaran:this.thn+'/'+(parseInt(this.thn)+1),
      semester:this.smt
    }
    this.api.getSiswaKelas(data).subscribe(
      data=>{
        // console.log(data);
        data.forEach(el => {
          this.dataNilai.push({
            nama:el.nama,
            nisn:el.nisn,
            kkm:'',
            nilai:''
          });
        });
        // this.siswaInClass = data;
      },err=>{},
      ()=>{
        console.log(this.dataNilai);
        this.siswaInClass = this.dataNilai;
      }
    );
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

  simpan(){
    console.log(this.dataNilai);
  }

}
