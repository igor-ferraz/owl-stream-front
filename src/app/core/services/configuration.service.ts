import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    private appConfig: any;

    constructor(private httpClient: HttpClient) { }

    async loadAppConfig() {
        const config$ = this.httpClient.get('/assets/config.json');

        return await lastValueFrom(config$).then(result => {
            this.appConfig = result;
        });
    }

    get apiBaseUrl(): string {
        return this.appConfig?.apiBaseUrl;
    }
}
