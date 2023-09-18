import { Injectable } from '@angular/core';
import { Cinelist2 } from 'src/app/shared/models/cinelist.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { ConfigurationService } from './configuration.service';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor() { }

    public get(): Cinelist2[] {
        return [];
    }
}
