import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './pages/library/library.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LibraryComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LibraryRoutingModule,
  ]
})
export class LibraryModule { }
