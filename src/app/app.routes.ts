import { Routes } from "@angular/router";
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "movies",
        pathMatch: "full"
    },
    {
        path: "movies",
        component: MovieListComponent
    },
    {
        path: "movie/:id",
        component: MovieDetailsComponent
    }

];