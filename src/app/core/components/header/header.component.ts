import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'os-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() onMenuVisbilityChange = new EventEmitter<boolean>();

    public faBars = faBars;
    public faUser = faUser;
    public breakpoint = Breakpoint;
    public size = Breakpoint.None;
    public menuVisible = false;
    public links: any[] = [];

    private allLinks = [
        {
            name: 'Entrar',
            url: '/auth/sign-in',
            icon: ''
        },
        {
            name: 'Acervo',
            url: '/library',
            icon: ''
        },
        {
            name: 'Sobre nós',
            url: '/about',
            icon: ''
        }
    ];


    constructor(private responsive: BreakpointObserver) { }

    // XSmall (max-width: 599.98px)
    // Small (min-width: 600px) and (max-width: 959.98px)
    // Medium (min-width: 960px) and (max-width: 1279.98px)
    // Large (min-width: 1280px) and (max-width: 1919.98px)
    ngOnInit(): void {
        this.responsive.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.XSmall;
            this.links = this.allLinks;

            if (breakpoints[Breakpoints.Small]) {
                this.size = this.breakpoint.Small;
            }
            else if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
                this.links = this.allLinks;
            }
            else if (breakpoints[Breakpoints.Large] || breakpoints[Breakpoints.XLarge]) {
                this.menuVisible = false;
                this.links = [...this.allLinks];
                this.links.shift();
                // this.links.pop();
                this.size = breakpoints[Breakpoints.Large] ? this.breakpoint.Large : this.breakpoint.XLarge;
            }
        });
    }

    public changeMenuVisibility(): void {
        this.menuVisible = !this.menuVisible;
        this.onMenuVisbilityChange.emit(this.menuVisible);
    }
}
