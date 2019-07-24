import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movie: any;
  parameters = '';

  constructor(public route: ActivatedRoute, public _ms: MoviesService) {

    this.route.params.subscribe( data => {

        console.log(data);
        this.parameters = data.page;

        this._ms.getMovie(data['id']).subscribe( movie => {
                                        console.log(movie);
                                        this.movie = movie;
        });
    });

   }

  ngOnInit() {
  }

}

/*  TODO:

- esta pantalla debe mostrar por lo menos, la imagen del poster en grande
- debe mostrar la sinopsis de la pelicula
- debe poder regresar a la pagina anterior
- la pagina anterior, debe ser de donde se llamo, home o search.

*/
