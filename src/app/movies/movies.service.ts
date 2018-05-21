import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

import { IMovieItem } from './movie';

@Injectable()
export class MoviesService {
    private apiURL = `https://swapi.co/api/films/?format=json`;

    constructor( private http: HttpClient  ) {}

    getMovies(): Observable<IMovieItem[]> {
        return this.http.get<IMovieItem[]>(this.apiURL)
             .pipe(tap(data => JSON.stringify(data)) , catchError(this.errorHandler));

    }
    errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.message || 'Server Error');
    }
}
