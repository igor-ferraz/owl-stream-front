import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { PageState } from 'src/app/shared/models/states/page-state.model';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    public movie: Movie | undefined;

    public state: Partial<PageState> = {
        loading: true,
        errorState: {
            error: false
        }
    };

    constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');

            if (id) {
                this.moviesService.get(id).subscribe({
                    next: (movie) => {
                        this.movie = movie;
                    },
                    error: () => {
                        this.state.errorState = {
                            error: true,
                            message: 'No momento, não foi possível obter as informações desse filme. Tente novamente em alguns instantes.'
                        }
                    }
                }).add(() => this.state.loading = false);
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
