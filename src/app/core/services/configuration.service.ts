import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Configuration } from 'src/app/shared/models/configuration/configuration.model';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    private appConfig: Configuration | undefined;

    constructor(private httpClient: HttpClient) { }

    async loadAppConfig() {
        const config$ = this.httpClient.get('/assets/config.json');

        return await lastValueFrom(config$).then(result => {
            this.appConfig = result as Configuration;
        });
    }

    get apiBaseUrl(): string {
        return this.appConfig ? this.appConfig.apiBaseUrl : '';
    }
}
