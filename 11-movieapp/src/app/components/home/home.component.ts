import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

 newMovies: any;
 popularMovies: any;
 kidMovies:any;


  constructor(public _ms: MoviesService) {

    this._ms.getChart()
      .subscribe( data => {
        console.log(data);
        this.newMovies = data;
      })

    this._ms.getPopulars()
      .subscribe( data => {
        console.log(data);
        this.popularMovies = data;
      });
    this._ms.getKids()
      .subscribe( data => {
        this.kidMovies = data;
        console.log(data);
      });
}



  ngOnInit() {

  }

}

/* 

- peliculas en cartelera de cines actual 
  generar la fecha automaticamente
- peliculas populares
- peliculas para niños mas populares

- al hacer click en cualquier pelicula, debe de llevarme
  a una pantalla que me permita ver informacion de la
  pelicula


*/
