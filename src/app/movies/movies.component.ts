import { Component, OnInit } from '@angular/core';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies = [];
  public errorMsg;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
     this.moviesService.getMovies()
     .subscribe(results =>  this.movies = results,
                error => this.errorMsg = error  );
  // console.log(this.movies);
  }

}
