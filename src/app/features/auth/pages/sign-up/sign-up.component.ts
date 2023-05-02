import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
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

    constructor(private router: Router, private responsive: BreakpointObserver) { }

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

    public back() {
        // Ask for sure if form is dirty
        this.router.navigateByUrl("/auth/sign-in");
    }
}
