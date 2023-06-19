import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    public movie: Movie | undefined;
    private alreadyClicked = false;

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');

            if (id) {
                this.movie = this.moviesService.get(id);
            }
        });
    }

    public toggleVideoFullscreen(): void {
        const videoElement = document.getElementsByTagName("video")[0];

        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        }
    }
}
