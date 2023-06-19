import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
    selector: 'os-movies-carousel',
    templateUrl: './movies-carousel.component.html',
    styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent {
    @Input() id!: number;
    @Input() title: string = '';
    @Input() movies: Movie[] = [];

    public loading = true;
    public movieListIdSuffix = 'movieList-';
    public arrowLeftHidden = true;
    public imagePrefix = "https://owl-stream-s3.s3.sa-east-1.amazonaws.com/pictures/";

    private defaultScrollSize = 400;

    ngOnInit(): void {
        const elements = document.querySelectorAll(`[id^="${this.movieListIdSuffix}"]`);
        this.id = elements.length + 1;
    }

    public scroll(id: number, direction: 'left' | 'right'): void {
        let element = document.getElementById(this.movieListIdSuffix + id);

        let scrollWidth = element?.scrollWidth as number;
        let clientWidth = element?.clientWidth as number;
        let scrollLeft = element?.scrollLeft as number;
        let scrollSize: number;

        if (direction === 'right') {
            scrollSize = (scrollLeft === scrollWidth - clientWidth) ? 0 : (scrollLeft + this.defaultScrollSize);
        }
        else {
            scrollSize = (scrollLeft === 0) ? (scrollWidth - clientWidth) : (scrollLeft - this.defaultScrollSize);
        }

        element?.scroll({
            left: scrollSize,
            behavior: 'smooth'
        });

        this.arrowLeftHidden = false;
    };
}
