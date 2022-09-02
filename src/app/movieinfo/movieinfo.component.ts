import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/api/api.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

  movie: any;
  movieid:any;
  backdrop:any;
  cast: any;
  recom: any;
  keywords: any;

  constructor(
    private ApiServices: ApiServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getparam();
    this.route.paramMap.subscribe((res:any)=>{
      let a = res.params.id;
      this.getMovie(a);
    this.getbackimg(a);
    this.getCast(a);
    this.getrecom(a);
    this.getkeyw(a);
    window.scrollTo(0,0)
    })
    
  }

  getbackimg(id:string){
    this.ApiServices.getBackdropsImages(id).subscribe((res:any) =>{
      this.backdrop = res.backdrops;
    })
  }

  getMovie(id:string){
    this.ApiServices.getMovie(id).subscribe((res:any)=>{
      this.movie = res;
    })
  }

  getCast(id:string){
    this.ApiServices.getPersonCast(id).subscribe((res:any) =>{
      this.cast = res.cast;
      console.log(this.cast)
    })
  }

  getrecom(id:string){
    this.ApiServices.getrecomded(id).subscribe((res:any)=>{
      this.recom = res.results;
    })
  }

  getparam(){
    this.movieid = this.route?.snapshot?.paramMap?.get('id');
  }

  getkeyw(id:string){
    this.ApiServices.getKeywords(id).subscribe((res:any) => {
      this.keywords = res.keywords;
    })
  }
}
