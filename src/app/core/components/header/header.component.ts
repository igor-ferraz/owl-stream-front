import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Breakpoint } from 'src/app/shared/models/responsive/breakpoint.enum';

@Component({
    selector: 'os-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
            name: 'Filmes',
            url: '/library/movies',
            icon: ''
        },
        {
            name: 'Documentários',
            url: '/library/movies?genres=4',
            icon: ''
        },
        {
            name: 'Séries',
            url: '/library/series',
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
            Breakpoints.Medium,
            Breakpoints.Large
        ]).subscribe(result => {
            const breakpoints = result.breakpoints;

            this.size = this.breakpoint.Small;
            this.links = this.allLinks;

            if (breakpoints[Breakpoints.Medium]) {
                this.size = this.breakpoint.Medium;
                this.links = this.allLinks;
            }
            else if (breakpoints[Breakpoints.Large]) {
                this.menuVisible = false;
                this.links = [...this.allLinks];
                this.links.shift();
                this.links.pop();
                this.size = this.breakpoint.Large;
            }
        });
    }

    public changeMenu(): void {
        this.menuVisible = !this.menuVisible;
    }
}
