import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Breakpoint } from './shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private responsive: BreakpointObserver) { }

    public breakpoint = Breakpoint;
    public size = Breakpoint.None;
    public menuVisible = false;

    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            if (breakpoints[Breakpoints.XSmall]) {
                this.size = this.breakpoint.XSmall;
            }
            else if (breakpoints[Breakpoints.Small]) {
                this.size = this.breakpoint.Small;
            }
            else if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
            }
            else {
                this.size = Breakpoint.None;
            }

            this.fixPageOverflow();
        });
    }

    private fixPageOverflow(): void {
        const htmlElement = document.documentElement;
        const menuWrapperElement = document.getElementById('menu-wrapper');

        if (menuWrapperElement) {
            menuWrapperElement.style.top = `calc(6rem - ${htmlElement.scrollTop}px)`;
        }

        if (this.menuVisible && this.size >= this.breakpoint.XSmall && this.size <= this.breakpoint.Medium) {
            htmlElement.style.overflowY = 'hidden';
        }
        else {
            htmlElement.style.overflowY = 'auto';
        }
    }

    public menuChanged(visibility: boolean): void {
        this.menuVisible = visibility
        this.fixPageOverflow();
    }
}
