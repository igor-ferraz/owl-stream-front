import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;

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
}
