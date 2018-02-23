import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Film } from "../film";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  film: Film;
  storeFilm: Film;
  //film$: Observable<Film>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<Film>) {
    /* this.film$ = store.pipe(
      select('film'),
      map((v: any) => v.title)
    ) */

    store.pipe(
      select('film'),
      map((v: any) => v)
    ).subscribe(
      film => this.storeFilm = film,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { film: Film }) => {
      this.film = data.film;
    });
  }

}
