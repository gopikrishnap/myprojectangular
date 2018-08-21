import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

   subscribedObservable: any;
   id: any;
   movie: any;
  movies: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


    this.movies = [{
      id: 1,
      name: "E Nagaraniki Emaindhi",
      genere: "Comedy",
     
    },
    {
      id: 2,
      name: "chinababu",
      genere: 'Social oriented',
   
    },
    {
      id: 3,
      name: "Rangasthalam",
      genere: 'Revenge Drama',
     
    }
    ]
    this.subscribedObservable = this.route.params.subscribe(
      (params) => {
        return this.id = params['id']

      })

    this.displayMovieDetails ();
    console.log(this.id)
    }
  displayMovieDetails() {
    this.movies.forEach(movie => {
      if (movie.id == this.id) {
        this.movie = movie;
      }
    });
  }
  ngOnDestroy() {
    this.subscribedObservable.unsubscribe();}
}
