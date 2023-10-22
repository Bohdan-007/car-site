import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent {
  constructor(private renderer: Renderer2) {
    // this.renderer.setStyle(document.body, "background", "url(https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg)")
    this.renderer.setStyle(document.body, "background", "url(../../assets/images/login-bg.jpg)")
  }
};
