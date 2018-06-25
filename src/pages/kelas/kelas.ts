import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AddSiswaComponent } from '../../components/add-siswa/add-siswa';
import { ToolsProvider } from '../../providers/tools/tools';
@IonicPage()
@Component({
  selector: 'page-kelas',
  templateUrl: 'kelas.html',
})
export class KelasPage {
  siswaInClass:any;  
  public namaSekolah: string;
  public thn: string;
  public smt: string;
  public kls: string;

  public enableAdd: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public mdlCtrl: ModalController,
    public tool: ToolsProvider
  ) {
  }

  ionViewDidLoad() {
    this.getProfilSekolah();
  }
  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }
  getPeriode(){
    if(this.smt==='1'){
      return '2';
    }else if(this.smt==='2'){
      return '1';
    }
  }
  optGet(){
    return{
      kd_kelas:this.kls,
      tahun_ajaran:this.thn+'/'+(parseInt(this.thn)+1),
      semester:this.smt
    }
  }

  option(nisn:string){
    return{
      periode:this.thn+''+this.getPeriode(),
      nisn:nisn,
      kd_kelas:this.kls,
      tahun_ajaran:this.thn+'/'+(parseInt(this.thn)+1),
      semester:this.smt
    }
  }

  addSiswa(){
    let modal = this.mdlCtrl.create(AddSiswaComponent, {ta:'', kelas:''},{enableBackdropDismiss:false});
    modal.present();
    modal.onDidDismiss(
      data=>{
        if(data){
          this.api.getSiswaInKelas(this.thn+''+this.getPeriode(), data).subscribe(
            ret=>{
              if(ret.result==="0"){
                this.saveSiswa(data);
              }else if(ret.result==="1"){
                let conf = this.tool.showConfirm(`data siswa sudah terdaftar di kelas(${ret.kelas}) nisn(${ret.nisn}) nama(${ret.nama})`,'Confirm','Batal', 'Update')
                conf.present();
                conf.onDidDismiss((res)=>{
                  if(res){
                    console.log('ubah');
                  }else{
                    console.log('batal');
                  }
                });
              }
            }
          );
        }
      }
    );
  }

  saveSiswa(data){
    // console.log('save');
    this.api.addSiswaKelas(this.option(data)).subscribe(
      res=>{
        console.log(res);
        if(res.errMessage===null){
          this.tool.showAlert("info",`Berhasil menambahkan nisn(${data})`);
        }else {
          console.log(res.errMessage);
        }
        this.getSiswaInClass();
      }
    );
  }

  getSiswaInClass(){
    this.api.getSiswaKelas(this.optGet()).subscribe(
      data=>{
        // console.log(data);
        this.siswaInClass = data;
      }
    );
  }

  check(){
    if(this.thn && this.smt && this.kls){
      this.enableAdd = true;
      this.getSiswaInClass();
    }
  }

  removeSiswa(nisn){
    console.log(nisn);
  }

}
