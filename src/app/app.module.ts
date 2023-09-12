import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import { ConfigurationService } from './core/services/configuration.service';

import localePt from '@angular/common/locales/pt';

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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
