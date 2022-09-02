import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'movieinfo/:id',
    component: MovieinfoComponent
    // loadComponent: () => import('./movieinfo/movieinfo.component').then(mod => mod.MovieinfoComponent)
  },
  {
    path: 'signup',
    component: SignupComponent
    },
    {
      path: 'login',
      component: LoginComponentComponent
    },
    {
      path: '',
      component: HomepageComponentComponent
    },
    {
      path: 'homepage',
      component: HomepageComponentComponent
    },
    {
      path: 'search/:id',
      component: SearchPageComponent
    },
    {
      path: 'filter/:id',
      component: FilterPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
