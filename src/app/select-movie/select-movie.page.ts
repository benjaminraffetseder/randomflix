import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/interfaces/movie.interface';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.page.html',
  styleUrls: ['./select-movie.page.scss'],
})
export class SelectMoviePage implements OnInit {
  public movie: Movie;
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  getRandomMovie() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.movie = this.movieService.getRandomMovie();
      }, 100 * i);
    }
  }
}
