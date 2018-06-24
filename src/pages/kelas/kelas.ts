import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { AddSiswaComponent } from '../../components/add-siswa/add-siswa';
import { ToolsProvider } from '../../providers/tools/tools';

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
          // console.log(data);

          // checkSiswaExist

          // if exist ask for update
          // if not do insert

          this.api.addSiswaKelas(this.option(data)).subscribe(
            res=>{
              console.log(res);
              if(res.errMessage===null){
                this.tool.showAlert("info",`Berhasil menambahkan nisn(${data})`);
              }else if(res.errMessage===1062){
                this.tool.showAlert("Error",`nisn(${data}) sudah ada di kelas`);
              }
              this.getSiswaInClass();
            }
          )
        }
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

}
