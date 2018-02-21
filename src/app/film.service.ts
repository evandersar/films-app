import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { Film } from "./film";

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) { }

  filmsUrl: string = 'https://swapi.co/api/films/';

  public getFilms(): Observable<Film[]> {
    let films = this.http.get(this.filmsUrl)
      .map(this.extractFilms) // преобразовывает ответ в массив экземпляров Film.
      .catch(this.handleError);
    return films;
  }

  private extractFilms(dataObj) {
    let res = dataObj.results;
    let films: Film[] = [];
    for (let i = 0; i < res.length; i++) {
      
      /* let film: Film = {
        title: res[i].title,
        episode_id: res[i].episode_id,
        director: res[i].director,
        producer: res[i].producer,
        release_date: res[i].release_date,
      } */

      let film = new Film(res[i].title, res[i].episode_id, res[i].director, res[i].producer, res[i].release_date);

      films.push(film);
    }
    return films;
  }


  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }

}
