import { Component, Input } from '@angular/core';
import { Cinelist } from '../../models/cinelists/cinelist.model';
import { PageState } from '../../models/states/page-state.model';
import { Observable, Subscription, fromEvent, of } from 'rxjs';

@Component({
    selector: 'os-movies-carousel',
    templateUrl: './movies-carousel.component.html',
    styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent {
    @Input() cinelist!: Cinelist;
    @Input() loading!: boolean;

    public arrowLeftHidden = true;
    public imagePrefix = "https://owl-stream-s3.s3.sa-east-1.amazonaws.com/pictures/";
    public scrollable: boolean = true;

    public state: Partial<PageState> = {
        loading: this.loading,
        errorState: {
            error: false
        }
    };

    private defaultScrollSize = 400;
    private resizeSubscription$!: Subscription;

    ngOnInit() {
        this.resizeSubscription$ = fromEvent(window, 'resize').subscribe(() => { this.checkIsScrollable() });
    }

    ngAfterViewInit() {
        this.checkIsScrollable();
    }

    private checkIsScrollable() {
        const element = document.getElementById(this.cinelist.id);

        if (element) {
            let scrollWidth = element.scrollWidth as number;
            this.scrollable = scrollWidth > document.documentElement.clientWidth;
        }
    }

    public scroll(direction: 'left' | 'right'): void {
        const element = document.getElementById(this.cinelist.id);

        if (element) {
            let scrollWidth = element.scrollWidth as number;
            let clientWidth = element.clientWidth as number;
            let scrollLeft = element.scrollLeft as number;
            let scrollSize: number;

            if (direction === 'right') {
                scrollSize = (scrollLeft === scrollWidth - clientWidth) ? 0 : (scrollLeft + this.defaultScrollSize);
            }
            else {
                scrollSize = (scrollLeft === 0) ? (scrollWidth - clientWidth) : (scrollLeft - this.defaultScrollSize);
            }

            element.scroll({
                left: scrollSize,
                behavior: 'smooth'
            });

            this.arrowLeftHidden = false;
        }
    };

    ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
    }
}
