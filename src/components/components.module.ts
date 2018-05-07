import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { AddArtikelComponent } from './add-artikel/add-artikel';
@NgModule({
	declarations: [LoginComponent,
    AddArtikelComponent],
	imports: [],
	exports: [LoginComponent,
    AddArtikelComponent]
})
export class ComponentsModule {}
