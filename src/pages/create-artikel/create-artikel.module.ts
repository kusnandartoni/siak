import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateArtikelPage } from './create-artikel';

@NgModule({
  declarations: [
    CreateArtikelPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateArtikelPage),
  ],
  exports:[
    CreateArtikelPage
  ]
})
export class CreateArtikelPageModule {}
