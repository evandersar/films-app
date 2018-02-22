import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Film } from "../film";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  film: Film;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { film: Film }) => {
      this.film = data.film;
    });
  }

}
