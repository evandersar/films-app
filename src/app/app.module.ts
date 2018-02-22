import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FilmService } from './film.service';
import { routes } from "./app.routes";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsService } from './movie-details.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FilmService, 
    MovieDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
