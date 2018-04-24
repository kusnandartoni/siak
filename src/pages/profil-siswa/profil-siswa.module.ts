import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilSiswaPage } from './profil-siswa';

@NgModule({
  declarations: [
    ProfilSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilSiswaPage),
  ],
  exports:[
    ProfilSiswaPage
  ]
})
export class ProfilSiswaPageModule {}
