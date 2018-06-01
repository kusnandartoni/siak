import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddUserComponent } from '../../components/add-user/add-user';
import { ApiProvider } from '../../providers/api/api';
import { ToolsProvider } from '../../providers/tools/tools';

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  public namaSekolah: string;
  public listSiswa: any[];
  constructor(
    public api: ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mdlCtrl: ModalController,
    public tools: ToolsProvider
  ) {
  
  }

  ionViewDidLoad() {
    this.getProfilSekolah();
    this.getListSiswa();
  }

  getProfilSekolah(){
    this.api.getDataSekolah().subscribe(
      data=>{
        this.namaSekolah = data.nama;
      }
    )
  }

  popup(){
    let modal = this.mdlCtrl.create(AddUserComponent, {},{enableBackdropDismiss:false});
    modal.present();
    modal.onDidDismiss(
      data=>{
        this.getListSiswa();
      }
    );
   }

   getListSiswa(){
     this.api.getListSiswa().subscribe(
      data=>{
        // console.log(data);
        this.listSiswa = data;
      }
     );
   }

   openEdit(nisn:string){
    // this.tools.showAlert('info','edit article id: '+ id);
    let modal = this.mdlCtrl.create(AddUserComponent, {nisn: nisn},{enableBackdropDismiss:false});
      modal.present();
      modal.onDidDismiss(
        data=>{
          this.getListSiswa();
        }
      );
  }
  deleteSiswa(nisn:string){
    this.api.removeSiswa(nisn).subscribe(
      data=>{
        this.tools.showAlert('info',data.message);
        this.getListSiswa();
      }
    )
  }

}
