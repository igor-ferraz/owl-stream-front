import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { LoginData } from 'src/app/shared/models/security/login-data.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private routePrefix = '/security';

    constructor(
        private configurationService: ConfigurationService,
        private httpClient: HttpClient
    ) { }

    public login(loginData: LoginData): Observable<Object> {
        const url = this.configurationService.apiBaseUrl + this.routePrefix + '/login';
        return this.httpClient.post(url, loginData);
    }
}
