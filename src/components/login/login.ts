import { Component, Renderer } from '@angular/core';
import { NavParams, ViewController,  MenuController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private formLogin: FormGroup;

  public role: any;
  public color: any;
	constructor(
		public param: NavParams,
		public render: Renderer,
    public viewCtrl: ViewController,
    public fb:FormBuilder,
    public menu:MenuController
	){
		this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'login-modal',true);
    this.role = this.param.get('role');
    this.color=this.role;
    this.formLogin = this.fb.group({
      clientId:['', Validators.required],
      password:['', Validators.required],
    });  
	}

  dismiss(){
    this.viewCtrl.dismiss();
  }
  doLogin(){
    this.viewCtrl.dismiss(true);
  }
}
