import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { AddArtikelComponent } from './add-artikel/add-artikel';
import { AddUserComponent } from './add-user/add-user';
@NgModule({
	declarations: [LoginComponent,
    AddArtikelComponent,
    AddUserComponent],
	imports: [],
	exports: [LoginComponent,
    AddArtikelComponent,
    AddUserComponent]
})
export class ComponentsModule {}
