import { Injectable } from '@angular/core';
import { Cinelist2 } from 'src/app/shared/models/cinelist.model';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor() { }

    public getCinelist(): Cinelist2[] {
        return [];

    }

    public get(id: string): Movie | undefined {
        return undefined;
    }
}
