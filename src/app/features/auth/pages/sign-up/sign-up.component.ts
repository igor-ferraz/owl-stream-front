import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;
    public gender: string = '';

    // private emailConfirmation = (email: string, confirmation: string) => {
    //     return email === confirmation ? null : { emailConfirmation: true };
    // };

    public form = new FormGroup({
        name: new FormControl('', [
            Validators.required
        ]),
        surname: new FormControl('', [
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        emailConfirmation: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required
        ]),
        passwordConfirmation: new FormControl('', [
            Validators.required
        ]),
        birthdate: new FormControl('', [
            Validators.required
        ]),
        gender: new FormControl('', [
            Validators.required
        ])
    });

    constructor(private router: Router, private responsive: BreakpointObserver) { }

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.Small;

            if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
            }
            else if (breakpoints[Breakpoints.Large]) {
                this.size = this.breakpoint.Large;
            }
            else if (breakpoints[Breakpoints.XLarge]) {
                this.size = this.breakpoint.XLarge;
            }
        });
    }

    public back() {
        // Ask for sure if form is dirty
        this.router.navigateByUrl("/auth/sign-in");
    }

    public signUp(): void {

    }
}
