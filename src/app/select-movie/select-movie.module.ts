import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TopbarModule } from './../components/topbar/topbar.module';

import { IonicModule } from '@ionic/angular';

import { SelectMoviePageRoutingModule } from './select-movie-routing.module';

import { SelectMoviePage } from './select-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMoviePageRoutingModule,
    TopbarModule,
  ],
  declarations: [SelectMoviePage],
})
export class SelectMoviePageModule {}
