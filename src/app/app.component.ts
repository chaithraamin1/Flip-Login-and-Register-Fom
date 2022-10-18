import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flip-login-and-registration-form';
  ngOnInit(){

  }
  openSignup(){
    var card:any=document.getElementById("card");
    card.style.transform="rotateY(-180deg)";
  }
  openLogin(){
    var card:any=document.getElementById("card");
    card.style.transform="rotateY(0deg)";
  }

}
