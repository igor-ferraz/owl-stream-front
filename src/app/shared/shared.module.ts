import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCarouselComponent } from './components/movies-carousel/movies-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MoviesCarouselComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MoviesCarouselComponent
    ]
})
export class SharedModule { }
