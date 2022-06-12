import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie } from 'src/interfaces/movie.interface';
import { environment } from './../../environments/environment';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  appName = environment.appName;
  movieForm;

  movies$: Observable<Movie[]>;

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ionViewWillEnter() {
    this.movieService.loadMovies();
    this.movies$ = this.movieService.getMovies();
  }

  ngOnInit() {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  addMovie() {
    const movie = this.movieForm.value;
    this.movieService.addMovie(movie);
    this.movieForm.reset();
  }
}
