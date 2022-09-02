import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ng5-slider';
import { ApiServices } from 'src/api/api.services';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.css']
})
export class FilterPageComponent implements OnInit {
  value: number = 1;
  highValue: number = 10;
  options: Options = {
    floor: 1,
    ceil:10
  }
  sort: string = 'popularity.desc';
  fdate: string = '';
  ldate: string = '';
  movie:any;
  param: any;
  title: any;
  
  gettext(){
    this.param= this.router?.snapshot?.paramMap?.get('id');
  }
  submit(id?:string){
    if(id == 'movies'){
      this.title = 'Popular Movies';
    this.ApiServies.getmoviefilter(this.sort,this.fdate,this.ldate,this.value,this.highValue).subscribe((res: any) =>{
      this.movie = res.results;
    })
  }
  else{
    this.title = 'Popular TV shows';
    this.ApiServies.gettvfilter(this.sort,this.fdate,this.ldate,this.value,this.highValue).subscribe((res:any)=>{
      this.movie = res.results;
    })
  }
}
  constructor(
    private ApiServies: ApiServices,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gettext();
    this.router.paramMap.subscribe((res:any)=> {
      console.log(res)
      if(res.params){
        this.submit(res.params.id)
      }
    })
    // this.submit();
  }

}
