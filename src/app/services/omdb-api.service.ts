import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { IOMDBResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  //perameters setting up the website and the api key
  private _siteURL="https://www.omdbpai.com/"
  //my key, keep your hands off (joking)
  private _key="?apikey=d7b6f4e&t"
  //constructor for the export class
  constructor(private _http:HttpClient) { }
//this is the method to create the response, and to stringify the data
getMovieData(movieName:string):Observable<IOMDBResponse>{
  return this._http.get<IOMDBResponse>(this._siteURL + this._key + movieName)
  .pipe(
    tap(data => console.log('Moviedata/error' + JSON.stringify(data))
  ),
  catchError(this.handleError)
  );
}
//this is the private method to spit into the console log if anything messes up
private handleError(err:HttpErrorResponse){
  console.log('OmdbApiService:' + err.message);

  return throwError(()=> new Error("OmdbApiService" + err.message))
}
}
