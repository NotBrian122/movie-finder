import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
  movieData:IOMDBResponse|undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}
//getting movie data names and displaying the directors name 
    getMovieDetails(movieName:string): Boolean {
      this._omdbService.getMovieData(movieName).subscribe(
        movieData =>{
          this.movieData=movieData;
          console.log("Director name : "+ this.movieData.Director);//console.logging the direcotrs name to see
          //if the corrispondance between both programs are the same
        }
      )
      return false;
    }
  

}
