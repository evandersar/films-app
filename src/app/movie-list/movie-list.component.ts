import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private filmService: FilmService) { }


  ngOnInit() {
    //this.films = this.filmService.getFilms();
    this.loadFilms();
  }

  films: any[];

  private loadFilms() {
    this.filmService.getData()
      .subscribe(
        films => this.films = films.results ? films.results : [], //Bind to view
        err => console.log(err) // Log errors if any
      );
  }

}
