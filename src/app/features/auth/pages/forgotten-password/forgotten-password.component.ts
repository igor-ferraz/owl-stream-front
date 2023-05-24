import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: './forgotten-password.component.html',
    styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;
    public step = 0;

    public form = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ])
    });

    constructor(private responsive: BreakpointObserver) { }

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.Medium,
            Breakpoints.Large
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.Small;

            if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
            }
            else if (breakpoints[Breakpoints.Large]) {
                this.size = this.breakpoint.Large;
            }
        });
    }

    public next(): void {
        if (this.form.valid) {
            this.step++;
        }
        else {
            console.log(this.form)
        }
    }
}
