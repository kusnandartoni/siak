import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../components/login/login';
import { HttpModule } from '@angular/http';
import { AddArtikelComponent } from '../components/add-artikel/add-artikel';
import { ToolsProvider } from '../providers/tools/tools';
import { AddUserComponent } from '../components/add-user/add-user';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    AddArtikelComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{mode: "md"}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    AddArtikelComponent,
    AddUserComponent
    
  ],
  providers: [
    // StatusBar,
    // SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToolsProvider,
    ApiProvider
  ]
})
export class AppModule {}
