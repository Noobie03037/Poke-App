import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private route= inject(Router);
  login= (pass: HTMLInputElement, mail: HTMLInputElement)=>{
      localStorage.setItem('mail', mail.value);
      localStorage.setItem('password', pass.value);
      this.route.navigate(['Home'])
      pass.value = '';
      mail.value = '';
  }
}