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
      this.pelajaran = data;
    })
  }

  getPeriode(){
    if(this.smt==='1'){
      return '2';
    }else if(this.smt==='2'){
      return '1';
    }
  }

  check(){
    this.dataNilai=[]
    if(this.thn && this.smt && this.kls && this.plj){
      this.enableAdd = true;
      this.getNilaiKelasSiswa();
    }
  }

  getNilaiKelasSiswa(){
    let data = {
      tahun_ajaran: this.thn+'/'+(parseInt(this.thn)+1),
      kd_kelas: this.kls,
      semester: this.smt,
      periode: this.thn+''+this.getPeriode(),
      kd_pelajaran: this.plj
    };
    this.dataNilai = [];
    this.api.getNilaiKelasSiswa(data).subscribe(res=>{
      console.log(res);
      this.dataNilai = res;
    })
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

  simpan(){
    this.dataNilai.forEach((siswa) => {
      let data = {
        periode : this.thn+''+this.getPeriode(),
        nisn : siswa.nisn,
        kd_pelajaran : this.plj,
        kkm : siswa.kkm,
        nilai : siswa.nilai
      };
      this.api.saveNilai(data).subscribe(res=>{
        console.log(res);
      });
    });
  }

}
