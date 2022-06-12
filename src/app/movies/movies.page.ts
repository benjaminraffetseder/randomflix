import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage {
  movies$: Observable<Movie[]>;
  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.getMovies();
  }

  deleteMovie(movie: Movie) {
    this.movieService.removeMovie(movie);
  }
}
