import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    public imagePrefix = "https://owl-stream-s3.s3.sa-east-1.amazonaws.com/pictures/";
    public movie: Movie | null = null;

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');

            if (id) {
                this.movie = this.moviesService.get(id);
            }
        });
    }
}
