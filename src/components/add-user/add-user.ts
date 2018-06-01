import { Component, Renderer } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ToolsProvider } from '../../providers/tools/tools';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.html'
})
export class AddUserComponent {

  public nama: string;
  public nisn: string;
  public tgl_lahir: string;
  
  constructor(
    public render: Renderer,
    public viewCtrl: ViewController,
    public tools: ToolsProvider,
    public api: ApiProvider,
    public params: NavParams    
  ) {
    this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'add-user-popup',true);   
    if(params.get('nisn')){
      console.log(params.get('nisn'));
      this.api.getSiswa(params.get('nisn')).subscribe(
        data=>{
          this.nisn = data.nisn;
          this.nama = data.nama;
          this.tgl_lahir = data.tgl_lahir;
        }
      );
    } 
  }

  option(){
    return {
      'nisn': this.nisn,
      'nama': this.nama,
      'tgl_lahir': this.tgl_lahir
    }
  }

  optEdit(){
    return{
      'nisn':this.nisn,
      'nama':this.nama,
      'tgl_lahir':this.tgl_lahir,
      'tpt_lahir':'-',
      'agama':'-',
      'alamat':'-',
      'nama_ayah':'-',
      'nama_ibu':'-',
      'pekerjaan_ayah':'-',
      'pekerjaan_ibu':'-',
      'alamat_ortu':'-'
    }
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

  simpan(){
    // console.log(this.option());
    if(this.params.get('nisn')){
      this.ubah();
    }else{
      this.tambah();
    }
  }

  ubah(){
    this.api.updateSiswa(this.option()).subscribe(
      res=>{
        this.tools.showAlert('info',res.message);
        this.dismiss();
      }
    );
  }


  tambah(){
    console.log('view');
    this.api.addSiswa(this.option()).subscribe(
      res=>{
        console.log(res);
        this.tools.showAlert('info',res.message);
        this.dismiss();
      }
    )
  }
}
