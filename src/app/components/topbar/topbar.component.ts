import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/interfaces/movie.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  appName = environment.appName;
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.loadMovies();
    this.movies$ = this.movieService.getMovies();
  }

  goToMovies() {
    this.router.navigate(['/movies']);
  }
}
