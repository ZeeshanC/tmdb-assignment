import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/api/api.services';
import { delay } from 'rxjs';
import { MovieinfoComponent } from '../movieinfo/movieinfo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  nowplay: any;
  nowpopular:any;
  search:any;
  gettoprated:any;
  free:any;
  tren:any;
  onTV = true;
  streaming = false;
  inTheater = false;
  forRent = false;

  constructor(
    private ApiServices: ApiServices,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.nowPopular(1);
    this.onTv();
    this.getToprated(1);
    this.nowPlay(1);
    // this.getfree(1);
    this.movie();
    this.today();
    // this.gettrending();
  }

  gettrending(){
    this.ApiServices.gettrending('').subscribe((res:any) =>{
      this.tren = res.results;
    })
  }
  getfree(page: number){
    this.ApiServices.getDiscoverMovies(page).subscribe((res:any) =>{
      this.free = res.results;
    })
  }

  nowPlay(page: number){
    this.ApiServices
    .getNow(page).subscribe((res: any) => {
      this.nowplay = res.results;
    })
  }

  nowPopular(page: number){
    if(this.onTV){
      this.ApiServices.getTv().subscribe((res:any) =>{
        this.nowPopular = res.results;
      })
    }
    else if(this.streaming){
      this.ApiServices.getPopular(page).subscribe((res: any) =>{
        this.nowpopular = res.results;
      })
    }
    // this.ApiServices.getPopular(page).subscribe((res: any) =>{
    //   this.nowpopular = res.results;
    // })
  }

  getToprated(page: number){
    this.ApiServices.getTopRated(page).subscribe((res:any) =>{
      this.gettoprated = res.results;
    })
  }

  route(id:string){
    this.router.navigate(['/Movieinfo',id])
  }

  onTv(){
    if(!this.streaming && !this.forRent && !this.inTheater){
      this.onTV = false;
      this.ApiServices.getdis(1,'horror').subscribe((res:any) =>{
        this.nowpopular = res.results;
      })
    }
    console.log(this.nowPopular)
    if(this.onTV){
      this.onTV = false;
    }
  }
  stream(page=1){
    if(!this.onTV && !this.forRent && !this.inTheater){
      this.streaming = false;
      this.ApiServices.getPopular(page).subscribe((res: any) =>{
        this.nowpopular = res.results;
      })
    }
    

  
  }

  gettvdetails(id:string){
      this.ApiServices.getTvdetails(id).subscribe((res:any) =>{
        this.movie = res.results;
      })
  }
  rent(){
    if(!this.onTV && !this.streaming && !this.inTheater){
    this.forRent = false;
    this.ApiServices.getTv().subscribe((res:any) =>{
      this.nowpopular = res.results;
    })
    }
  }

  threat(){
    if(!this.onTV && !this.streaming && !this.forRent){
      this.inTheater = false;
      this.ApiServices.getdis(1,'Crime').subscribe((res:any) =>{
        this.nowpopular = res.results;
      })
    }
  }

  movie(){
    this.ApiServices.getDiscoverMovies(1).subscribe((res:any) =>{
      this.free = res.results;
    })
  }

  tv(){

    this.ApiServices.getTvdis().subscribe((res: any) => {
      this.free = res.results;
    })
  }

  today(){
    this.ApiServices.gettrending('day').subscribe((res:any) =>{
      this.tren = res.results;
    })
  }

  thisweek(){
    this.ApiServices.gettrending('week').subscribe((res:any) =>{
      this.tren = res.results;
    })
  }

}
