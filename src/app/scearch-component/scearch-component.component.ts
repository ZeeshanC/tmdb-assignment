import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scearch-component',
  templateUrl: './scearch-component.component.html',
  styleUrls: ['./scearch-component.component.css']
})
export class ScearchComponentComponent implements OnInit {
  search?: string;

  Search(){
    this.router.navigate(['/search',this.search]);
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
