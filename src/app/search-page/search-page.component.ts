import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/api/api.services';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  value?: any = this.router?.snapshot?.paramMap?.get('id');
  movie: any;
  moviecount: any;
  Tvcount: any;
  collectioncount: any;

  gettext(){
    this.value = this.router?.snapshot?.paramMap?.get('id');
  }

  

  searchMovie(){
    if(this.value != null){
    this.ApiServices.searchMovies(this.value).subscribe((res: any)=>{
      this.moviecount = res.total_results
      this.movie = res.results;
    })
  }
  }

  searchTV(){
    if(this.value != null){
    this.ApiServices.searchTV(this.value).subscribe((res:any) =>{
      this.Tvcount = res.total_results;
      this.movie = res.results;
    })
  }
  }

  searchCollection(){
    if(this.value != null){
      this.ApiServices.searchCollection(this.value).subscribe((res: any) =>{
        this.collectioncount = res.total_results;
        this.movie = res.results;
      })
    }
  }

  valueget(){
    this.value = this.value;
    this.searchMovie();
    this.searchTV();
  }

  constructor(
    private router: ActivatedRoute,
    private ApiServices: ApiServices
  ) { }

  ngOnInit(): void {
    
    this.searchTV()
    this.gettext();
    this.searchCollection();
    this.searchMovie();
  }

}
