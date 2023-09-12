import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;
    public step = 0;
    public customerEmailProvider = '';

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

    public next(): void {
        if (this.form.valid) {
            const url = this.form.controls.email.value?.split('@')[1];

            if (url) {
                this.customerEmailProvider = 'https://' + url;
            }

            this.step++;
        }
    }

    public openUrl(): void {
        if (this.customerEmailProvider) {
            window.open(this.customerEmailProvider);
        }
    }
}
