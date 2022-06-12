import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMoviePage } from './select-movie.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMoviePageRoutingModule {}
