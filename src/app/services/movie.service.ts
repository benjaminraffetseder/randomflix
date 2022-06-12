import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies$ = new BehaviorSubject<Movie[]>([]);

  constructor(public toastController: ToastController) {}

  addMovie(movie: Movie) {
    const movies = this.movies$.value;
    movies.push(movie);
    this.movies$.next(movies);
    this.saveMovies();
    this.toastController
      .create({
        message: `${movie.name} added`,
        duration: 2000,
        color: 'dark',
      })
      .then((toast) => toast.present());
  }

  removeMovie(movie: Movie) {
    const movies = this.movies$.value;
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    this.movies$.next(movies);
    this.saveMovies();
  }

  getMovies() {
    return this.movies$
      .asObservable()
      .pipe(
        map((movies) => movies.sort((a, b) => a.name.localeCompare(b.name)))
      );
  }

  clearMovies() {
    this.movies$.next([]);
  }

  getRandomMovie() {
    const movies = this.movies$.value;
    const randomIndex = Math.floor(Math.random() * movies.length);
    console.log(randomIndex);
    return movies[randomIndex];
  }

  saveMovies() {
    const movies = this.movies$.value;
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  loadMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    this.movies$.next(movies);
  }
}
