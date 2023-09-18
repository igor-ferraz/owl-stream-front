import { Injectable } from '@angular/core';
import { Cinelist } from 'src/app/shared/models/cinelist.model';
import { Movie } from 'src/app/shared/models/movie.model';
import { ConfigurationService } from './configuration.service';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor() { }

    public getCinelist(): Cinelist[] {
        return [];

    }

    public get(id: string): Movie | undefined {
        return undefined;
    }
}
