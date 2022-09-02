import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {
  text: string = '';
  login?: boolean;
  signout? : boolean;
  isMenuOpen = false;

  togglemenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  Login(){
    this.router.navigate(['/login'])
    this.checktext();
  }

  Signout(){
    sessionStorage.removeItem('userdata')
    this.router.navigate(['/homepage'])
    this.checktext()
  }

  checktext(){
    let a = sessionStorage.getItem('userdata')
    if(a){
      this.text = 'Sign Out'
      this.login = false;
      this.signout = true;
    }
    else {
      this.text = 'Login'
      this.signout = false
      this.login = true;
    }
  }
  openNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "250px";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft = "250px";
  }
  closeNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "0";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft = "0";
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.closeNav()
    this.checktext();
  }

}
