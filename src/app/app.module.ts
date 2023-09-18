import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import { ConfigurationService } from './core/services/configuration.service';

import localePt from '@angular/common/locales/pt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCredentialInterceptor } from './core/interceptors/http-credential.interceptor';

registerLocaleData(localePt);

export const configurationFactory = (configurationService: ConfigurationService) => {
    return () => configurationService.loadAppConfig();
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        {
            provide: APP_INITIALIZER,
            useFactory: configurationFactory,
            deps: [ConfigurationService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpCredentialInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
