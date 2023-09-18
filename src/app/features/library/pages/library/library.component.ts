import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Cinelist } from 'src/app/shared/models/cinelist.model';

@Component({
    selector: 'app-movies',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
    public categories: Cinelist[] = [];

    constructor(private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.categories = this.moviesService.getCinelist();
    }
}