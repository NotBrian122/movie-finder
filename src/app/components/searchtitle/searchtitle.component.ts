import { Component } from '@angular/core';
import { IOMDBResponse } from '../../omdbresponse';

@Component({
  selector: 'app-searchtitle',
  imports: [],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  title = 'movie-finder';
  movieData:IOMDBResponse|undefined;
  errorMessage:any;

}
