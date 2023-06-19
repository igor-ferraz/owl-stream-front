import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
