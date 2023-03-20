import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCarouselComponent } from './components/movies-carousel/movies-carousel.component';

@NgModule({
    declarations: [
        MoviesCarouselComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoviesCarouselComponent
    ]
})
export class SharedModule { }
