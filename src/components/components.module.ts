import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login/login';
import { AddArtikelComponent } from './add-artikel/add-artikel';
import { AddUserComponent } from './add-user/add-user';
import { AddSiswaComponent } from './add-siswa/add-siswa';
@NgModule({
	declarations: [LoginComponent,
    AddArtikelComponent,
    AddUserComponent,
    AddSiswaComponent],
	imports: [],
	exports: [LoginComponent,
    AddArtikelComponent,
    AddUserComponent,
    AddSiswaComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
