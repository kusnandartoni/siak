import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: any, icon: string}>;
  public nama:string;
  public nisn:string;


  constructor(
    public platform: Platform, 
    public ev: Events
    // public statusBar: StatusBar, 
    // public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.ev.subscribe('login',(data)=>{
      this.nama = data.name;
      this.nisn = data.nisn;
      if (data.role==='Wali'){
        this.pages = [
          { title: 'Profile', component: 'ProfilSiswaPage', icon: 'contact' },
          { title: 'Raport', component: 'RaportPage', icon: 'analytics'},
        ];
      }else if(data.role==='Admin'){
        this.pages = [
          { title: 'Input Nilai', component: 'InputNilaiPage', icon: 'analytics'},
          { title: 'Master User', component: 'CreateUserPage', icon: 'analytics'},
          { title: 'Master Kelas', component: 'KelasPage', icon: 'analytics'},
          { title: 'Master Artikel', component: 'CreateArtikelPage', icon: 'analytics'},
          { title: 'Edit Sekolah', component: 'EditSekolahPage', icon: 'analytics'},
        ];
      }
    });
    // used for an example of ngFor and navigation

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    let logout = setTimeout(()=>{
      this.nav.setRoot('HomePage');
    },500);
  }
}
