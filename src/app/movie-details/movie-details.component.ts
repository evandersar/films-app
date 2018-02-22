import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FilmService } from '../film.service';

import { Film } from "../film";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  film: Film;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: FilmService) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.params["id"];
    this.service.getFilm(id).subscribe(
      res => this.film = res, //Bind to view
      err => console.log(err) // Log errors if any
    );
  }

}
