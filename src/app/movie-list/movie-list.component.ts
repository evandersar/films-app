import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

import { Film } from "../film";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private filmService: FilmService) { }


  ngOnInit() {
    this.loadFilms();
  }

  films: Film[];

  private loadFilms() {
    this.filmService.getFilms().subscribe(
        films => this.films = films, //Bind to view
        err => console.log(err) // Log errors if any
      );
  }

}
