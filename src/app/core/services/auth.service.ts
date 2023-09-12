import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private routePrefix = 'api/security';

    constructor(
        private configurationService: ConfigurationService,
        private httpClient: HttpClient
    ) { }

    public login(loginData: object): Observable<object> {
        const url = this.configurationService.apiBaseUrl + this.routePrefix;
        return this.httpClient.post(url, loginData);
    }
}
