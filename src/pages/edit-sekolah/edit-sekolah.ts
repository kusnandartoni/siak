import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ToolsProvider } from '../../providers/tools/tools';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-edit-sekolah',
  templateUrl: 'edit-sekolah.html',
})
export class EditSekolahPage {
  public namaSekolah: string='';
  public telpSekolah: string='';
  public faxSekolah: string='';
  public emailSekolah: string='';
  public alamatSekolah: string='';

  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tools: ToolsProvider
  ) {
    
  }

  ionViewDidLoad() {
    this.getProfilSekolah();
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        // console.log(data);
        this.namaSekolah = data.nama;
        this.telpSekolah = data.telp;
        this.faxSekolah = data.fax;
        this.alamatSekolah = data.alamat;
        this.emailSekolah = data.email;
      }
    )
  }

  option(){
    return {
      'nama': this.namaSekolah,
      'telp': this.telpSekolah,
      'fax': this.faxSekolah,
      'alamat': this.alamatSekolah,
      'email': this.emailSekolah
    }
  }

  simpan(){
    // console.log(this.option());
    this.api.saveDataSekolah(this.option()).subscribe(
      data=>{
        // console.log(data);
        this.tools.showAlert('info',data.message)
      }
    );
  }


}
