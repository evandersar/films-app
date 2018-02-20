import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) { }

  filmsUrl: string = 'https://swapi.co/api/films/';

  public getData(): Observable<{}> {
    let filmsObj = this.http.get(this.filmsUrl)
      .map(data => data)
      .catch(err => err);
    return filmsObj;
  }

  getFilms(): any[] {
    return [
      { "title": "Caught", "year": 1900, "director": null, "cast": null, "genre": null, "notes": null },
      { "title": "Clowns Spinning Hats", "year": 1900, "director": null, "cast": null, "genre": null, "notes": null },
      { "title": "Capture of Boer Battery by British", "year": 1900, "director": "James H. White", "cast": null, "genre": "Short documentary", "notes": null },
      { "title": "The Enchanted Drawing", "year": 1900, "director": "J. Stuart Blackton", "cast": null, "genre": null, "notes": null },
      {
        "title": "Avengers: Age of Ultron",
        "year": 2015,
        "director": "Joss Whedon",
        "cast": "Robert Downey, Jr., Chris Evans, Chris Hemsworth, Mark Ruffalo",
        "genre": "Action",
        "notes": "Walt Disney, Sequel to The Avengers (2012), Based on the comics of the same name by Stan Lee and Jack Kirby"
      },
      {
        "title": "Avengers, The Avengers",
        "year": 2012,
        "director": "Joss Whedon",
        "cast": "Robert Downey, Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, Samuel L. Jackson",
        "genre": "Superhero",
        "notes": "Walt Disney Pictures, Marvel Studios, Based on the comic book of the same name by Stan Lee and Jack Kirby"
      }
    ];
  }

}
