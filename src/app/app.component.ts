import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
 styles: [`h1{
   color: dodgerblue;
   background-color: yellow;
 }
 .logStyle{
   color: white;
 }`]
})
export class AppComponent {
  name = 'Restaurant-app';
  title: any;
  showSecretPassword = false;
  logButtons = [];

  logDisplay(){
    this.showSecretPassword = !this.showSecretPassword;
    // this.logButtons.push(this.logButtons.length+1);
    this.logButtons.push(new Date());

  }
}
