import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ToolsProvider } from '../../providers/tools/tools';

@IonicPage()
@Component({
  selector: 'page-profil-siswa',
  templateUrl: 'profil-siswa.html',
})
export class ProfilSiswaPage {

  public namaSekolah: string;

  nisn : string;
  nama : string;
  tgl_lahir : string;
  tpt_lahir : string;
  agama : string;
  alamat : string;
  nama_ayah : string;
  nama_ibu : string;
  pekerjaan_ayah : string;
  pekerjaan_ibu : string;
  alamat_ortu : string;
  hobi: string;
  
  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tools: ToolsProvider,
    public menu: MenuController
  ) {
    this.getDataSiswa();
  }

  option(){
    return{
      nisn : this.nisn,
      nama : this.nama,
      tgl_lahir : this.tgl_lahir,
      tpt_lahir : this.tpt_lahir,
      agama : this.agama,
      alamat : this.alamat,
      nama_ayah : this.nama_ayah,
      nama_ibu : this.nama_ibu,
      pekerjaan_ayah : this.pekerjaan_ayah,
      pekerjaan_ibu : this.pekerjaan_ibu,
      alamat_ortu : this.alamat_ortu
    }
  }

  ionViewDidLoad() {
    this.getProfilSekolah();
    this.menu.enable(true);
  }

  getDataSiswa(){
    this.api.getSiswa('6').subscribe(
      data=>{
        // console.log(data);
        this.nisn = data.nisn;
        this.nama = data.nama;
        this.tgl_lahir = data.tgl_lahir;
        this.tpt_lahir = data.tpt_lahir;
        this.agama = data.agama;
        this.alamat = data.alamat;
        this.nama_ayah = data.nama_ayah;
        this.nama_ibu = data.nama_ibu;
        this.pekerjaan_ayah = data.pekerjaan_ayah;
        this.pekerjaan_ibu = data.pekerjaan_ibu;
        this.alamat_ortu = data.alamat_ortu;        
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
    this.api.updateProfileSiswa(this.option()).subscribe(
      data=>{
        this.tools.showAlert('info',data.message);
      }
    )
  }

}
