import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private router: Router) { }

  public back() {
    // Ask for sure if form is dirty
    this.router.navigateByUrl("/auth/sign-in");
  }
}
