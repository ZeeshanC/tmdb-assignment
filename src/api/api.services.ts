import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiServices {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '378d50517001a889a5e2eae0c9b45aaa';
    this.language = 'en-US';
    this.region = 'IN';
  }

  gettrending(day:string){
    // https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
    return this.http.get(`${this.baseUrl}trending/all/${day}?api_key=${this.apiKey}`)
  }
  getDiscoverMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&page=${page}&include_adult=true&with_watch_monetization_types=free`);
  }

  getNow(page: number): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getPopular(page: number): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getTopRated(page:number): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
  }

  getPersonCast(id: string): Observable<any> {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}&language=en-US`)
    // return this.http.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`);
  }

  getrecomded(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getTv(): Observable<any>{
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getdis(page: number, type: string): Observable<any>{
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&page=${page}&with_genres=${type}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTvdis(): Observable<any>{
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&with_watch_monetization_types=free`)
  }

  getKeywords(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/${id}/keywords?api_key=${this.apiKey}`)
  }

  searchMovie(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${id}`)
  }

  searchTV(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${id}`)
  }

  searchCollection(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/search/collection${this.apiKey}&query=${id}`)
  }

  getmoviefilter(sort?: string,fdate?: string,tdate?: string,lscore?: number, gscore?:number): Observable<any>{
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&sort_by=${sort}&primary_release_date.gte=${fdate}&primary_release_date.lte=${tdate}&vote_average.gte=${lscore}&vote_average.lte=${gscore}`)
  }

  gettvfilter(sort?: string,fdate?: string,tdate?: string,lscore?: number, gscore?:number): Observable<any>{
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&sort_by=${sort}&first_air_date.gte=${fdate}&first_air_date.lte=${tdate}&vote_average.gte=${lscore}&vote_average.lte=${gscore}`)
  }

  getTvdetails(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}tv/${id}/?api_key=${this.apiKey}`)
  }
}