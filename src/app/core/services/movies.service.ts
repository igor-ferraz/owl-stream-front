import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private routePrefix = "movies";

    constructor(
        private configurationService: ConfigurationService,
        private httpClient: HttpClient
    ) { }

    public get(id: string): Observable<Movie> {
        const url = `${this.configurationService.apiBaseUrl}/${this.routePrefix}/${id}`;
        return this.httpClient.get<Movie>(url);
    }
}
