import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MovieinfoRoutingModule} from './movieinfo-routing.module'
import { MovieinfoComponent } from './movieinfo.component';


@NgModule({
  declarations: [
    MovieinfoComponent
  ],
 
  imports: [
    CommonModule,
  ],

})
export class MovieDetailsModule { }