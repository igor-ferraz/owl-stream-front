import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PlayComponent } from './pages/play/play.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent
  },
  {
    path: 'movies/:id',
    component: MoviesComponent
  },
  {
    path: 'play/:id',
    component: PlayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
