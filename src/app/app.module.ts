import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';
import { ScearchComponentComponent } from './scearch-component/scearch-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { SignupComponent } from './signup/signup.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HeaderCompComponent,
    FooterComponentComponent,
    HomepageComponentComponent,
    CardComponentComponent,
    ScrollComponentComponent,
    ScearchComponentComponent,
    MovieinfoComponent,
    SignupComponent,
    SearchPageComponent,
    FilterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule,
    // SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
