import { Component } from '@angular/core';
import { MoviesService } from './providers/movies.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'MoviesApp';
 
  constructor(public moviesService: MoviesService) {
    /*
      this.moviesService.getPopulars().subscribe(response => {
        console.log(response);
      });
 
      this.moviesService.searchMovie('spiderman').subscribe(response => {
        console.log(response);
      });
 */
 
  }
 
}