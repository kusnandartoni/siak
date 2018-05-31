import { Component, Renderer } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ToolsProvider } from '../../providers/tools/tools';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'add-artikel',
  templateUrl: 'add-artikel.html'
})
export class AddArtikelComponent {

  public id:string = 'r';
  public judul:string;
  public gambar:string;
  public tanggal:string= 'YYYY-MM-DD';
  public isi:string;

  isUpdate: boolean = true;

  constructor(
    public api: ApiProvider,
    public render: Renderer,
    public viewCtrl: ViewController,
    public tools: ToolsProvider,
    public params: NavParams
  ) {
    this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'add-article-popup',true);
    if(params.get('idArtikel')){
      this.isUpdate = true;
      // console.log(params.get('idArtikel'));
      this.api.getArtikel(params.get('idArtikel')).subscribe(
        data=>{
          this.id = data.id;
          this.judul = data.judul;
          this.gambar = data.gambar;
          this.tanggal = data.tanggal;
          this.isi = data.isi;
        }
      );
    }
  }
  option(){
    return {
      'id': this.id,
      'judul': this.judul,
      'gambar': this.gambar,
      'tanggal': this.tanggal,
      'isi': this.isi
    }
  }

  simpan(){
    // console.log(this.option());
    if(this.params.get('idArtikel')){
      this.ubah();
    }else{
      this.tambah();
    }
  }

  tambah(){
    console.log('tambah');
    this.api.addArtikel(this.option()).subscribe(
      res=>{
        console.log('res',res)
        this.tools.showAlert('info',res.message);
        this.dismiss();
      }
    );
  }

  ubah(){
    this.api.updateArtikel(this.option()).subscribe(
      res=>{
        this.tools.showAlert('info',res.message);
        this.dismiss();
      }
    );
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }



}
