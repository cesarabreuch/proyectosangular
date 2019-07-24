import { Injectable } from '@angular/core';
import 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient, HttpClientJsonpModule, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  private apikey:string = "c00282833463d3d35c38daab6f832479";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  movies: any[] = [];
 
  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient) { }

  getChart() {

    let from = new Date();
    let to = new Date();
    to.setDate(to.getDate() + 7);
    // formato de busqueda en dbMovie
    let fromStr = `${from.getFullYear()}-${from.getMonth()+1}-${from.getDate()}`;
    let toStr = `${to.getFullYear()}-${to.getMonth()+1}-${to.getDate()}`;


    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${fromStr}&primary_release_date.lte=${toStr}&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map(data => {
      return data['results'];
    }));
    }


  getPopulars() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map(data => {
      return data['results'];
    }));
  }

  searchMovie(movieName: string) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ movieName }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map(data => {
      this.movies = data['results'];
      return data['results'];
    }));
  }

  getKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map(data => {
      return data['results'];
    }));
  }

  getMovie(id:string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map(data => {
      return data;
    }));

  }

 
}