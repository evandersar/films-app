import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { FilmService } from './film.service';
import { Film } from "./film";
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailsService implements Resolve<Film>{

  constructor(private service: FilmService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Film> | any {

    let id = +route.params["id"];

    return this.service.getFilm(id).map(film => {
      if (film) {
        return film;
      } else { // id not found
        this.router.navigate(['/movies']);
        return false;
      }
    });

  }

}
