import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;

    public form = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required
        ])
    })

    constructor(
        private responsive: BreakpointObserver
    ) { }

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

    public login(): void {

    }
}
