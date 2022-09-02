import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/api/api.services';

@Component({
  selector: 'app-scearch-component',
  templateUrl: './scearch-component.component.html',
  styleUrls: ['./scearch-component.component.css']
})
export class ScearchComponentComponent implements OnInit {
  search?: string;
  image?: string;

  Search(){
    this.router.navigate(['/search',this.search]);
  }

  getImage(){
    this.ApiServices.getPopular(1).subscribe((res:any) =>{
      this.image = 'https://image.tmdb.org/t/p/original/'+ res.results[Math.floor(Math.random() * res.results.length)].backdrop_path
    })
  }
  constructor(
    private router: Router,
    private ApiServices: ApiServices
  ) { }

  ngOnInit(): void {
    this.getImage()
  }

}
