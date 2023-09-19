import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinelist } from 'src/app/shared/models/cinelists/cinelist.model';

@Injectable({
    providedIn: 'root'
})
export class CinelistsService {
    private routePrefix = "/cinelists";

    constructor(
        private configurationService: ConfigurationService,
        private httpClient: HttpClient
    ) { }

    public get(): Observable<Cinelist[]> {
        const url = this.configurationService.apiBaseUrl + this.routePrefix;
        return this.httpClient.get<Cinelist[]>(url);
    }
}
