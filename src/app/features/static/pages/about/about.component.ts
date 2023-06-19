import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;

    constructor(private responsive: BreakpointObserver) { }

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.XSmall,
            Breakpoints.Small
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.XSmall;

            if (breakpoints[Breakpoints.Small]) {
                this.size = this.breakpoint.Small;
            }
        });
    }
}
