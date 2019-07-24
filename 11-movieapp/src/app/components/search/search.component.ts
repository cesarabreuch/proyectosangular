import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search = '';

  constructor(public _ms: MoviesService, public route: ActivatedRoute) { 

    this.route.params.subscribe(data => {
        if(data['text']){
          this.search = data['text'];
          this.searchMovie();
        }
        console.log(data);
      })
  }

  ngOnInit() {
  }


  searchMovie() {
    if(this.search.length === 0){
      return;
    }
    this._ms.searchMovie(this.search)
      .subscribe( data => {
        console.log(data);
      });
  }


}

/*  TODO:

- debe de poder buscar peliculas
- deben aparecer de forma elegante con la imagen del poster
- al hacer click, llevarme a ver la informacion de la pelicula

*/
