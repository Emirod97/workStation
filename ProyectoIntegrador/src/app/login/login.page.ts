import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username ='produccion';
  password ='test';

  constructor(private router:Router, public alertCtlr: AlertController) { }

  ngOnInit() {
  }

  
  enter() {
    
    if(this.username == (<HTMLInputElement>document.getElementById('user')).value && 
    this.password == (<HTMLInputElement>document.getElementById('pass')).value){
      this.router.navigateByUrl("/app/tabs/tab1");
    }else{
      this.presentAlert();
    }

}

async presentAlert() {
const alert = await this.alertCtlr.create({
  header: 'Algo salio mal!',
  message: 'Usuario o contraseña incorrecta.',
  buttons: ['Aceptar']
});

await alert.present();
}

}
