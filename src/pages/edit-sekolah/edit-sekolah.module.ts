import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSekolahPage } from './edit-sekolah';

@NgModule({
  declarations: [
    EditSekolahPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSekolahPage),
  ],
  exports:[
    EditSekolahPage
  ]
})
export class EditSekolahPageModule {}
