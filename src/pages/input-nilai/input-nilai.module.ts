import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputNilaiPage } from './input-nilai';

@NgModule({
  declarations: [
    InputNilaiPage,
  ],
  imports: [
    IonicPageModule.forChild(InputNilaiPage),
  ],
  exports:[
    InputNilaiPage
  ]
})
export class InputNilaiPageModule {}
