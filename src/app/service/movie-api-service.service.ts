import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cast } from '../pages/movie-details/movie-details.component';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  bannerApiData(): Observable<any> {
    const url = `${this.baseurl}/trending/all/week?api_key=${this.apikey}`;
    return this.http.get(url);
  }


  filmesTendenciasApiData(): Observable<any> {
    const url = `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`;
    return this.http.get(url);
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    const url = `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`;
    return this.http.get(url);
  }

  getMovieDetails(data: any): Observable<any> {
    const url = `${this.baseurl}/movie/${data}?api_key=${this.apikey}`;
    return this.http.get(url);
  }

  getMovieVideo(data: any): Observable<any> {
    const url = `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`;
    return this.http.get(url);
  }

  getMovieCast(data: any) {
    const url = `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`;
    return this.http.get<Cast>(url);
  }

  // generos
  fetchActionMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`;
    return this.http.get(url);
  }

  fetchAdventureMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`;
    return this.http.get(url);
  }

  fetchAnimationMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`;
    return this.http.get(url);
  }

  fetchComedyMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`;
    return this.http.get(url);
  }

  fetchDocumentaryMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`;
    return this.http.get(url);
  }

  fetchScienceFictionMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`;
    return this.http.get(url);
  }

  fetchThrillerMovies(): Observable<any> {
    const url = `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`;
    return this.http.get(url);
  }
}
